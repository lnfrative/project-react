// region import
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress, Skeleton } from '@mui/material'

// hooks
import { useSessionStore, useApiStore, useStrictEffect } from 'hooks'

// components
import {
	ValueCoin,
	ValuePrice,
	SVGValueVariation,
	Transaction,
	Panel,
	ValueDecimalLabel,
	Checkbox,
	CoinAsset
} from 'components'

// skeletons
import { TransactionSkeleton } from 'components/Transaction'

// utilities
import { resources, message } from 'utilities'
import { fetchSummary, fetchLastTransactions, fetchWallets } from 'utilities/fetcher'

// modules
import { switchExcludeRewardMovements } from './module'

// styles
import { StyledPanel, ContainerCheckbox, StyledCheckbox, Values, TableAssets, CoinAssets, StyledCoinAsset } from './style'
import styles from './index.module.css'

// constants
const skeletonValues = [1,2,3,4,5]
// endregion

function Overview() {
	const session = useSessionStore()
	const api = useApiStore()

	useEffect(() => {
		if (session.user.status === 'loaded') {
			fetchSummary()

			if (session.wallets.status !== 'loaded') {
				fetchWallets()
			}
		}
	}, [session.user])

	useEffect(() => {
		if (session.user.status === 'loaded' && !session.transactions.last.data) {
			fetchLastTransactions({
				types: session.excludeRewardTransactions ? '1,3,4' : '1,2,3,4,5',
				perPage: 5,
			})
		}
	}, [session.user])

	useStrictEffect(() => {
		fetchLastTransactions({
			types: session.excludeRewardTransactions ? '1,3,4' : '1,2,3,4,5',
			perPage: 5,
		})
	}, [session.excludeRewardTransactions])

	return (
		<div className={styles.container}>
			<div className={styles.mainGroup}>
				<StyledPanel>
					<Panel title={message({ id: 'LAST_30_DAYS' })}>
						<Values>
							<ValueDecimalLabel
								decimals={2}
								value={session.summary?.received ?? 0}
								sise="large"
								sign="$"
								title={message({ id: 'RECEIVED' })}
								loading={!session.summary}
							/>
							<ValueDecimalLabel
								decimals={2}
								value={session.summary?.spent ?? 0}
								sise="large"
								sign="$"
								title={message({ id: 'SPENT' })}
								loading={!session.summary}
							/>
							<ValueDecimalLabel
								decimals={2}
								value={session.summary?.earned ?? 0}
								sise="large"
								sign="$"
								title={message({ id: 'EARNED' })}
								loading={!session.summary}
							/>
							<ValueDecimalLabel
								decimals={2}
								value={session.summary?.net ?? 0}
								sise="large"
								sign="$"
								title={message({ id: 'NET_INCOME' })}
								loading={!session.summary}
							/>
						</Values>
					</Panel>
				</StyledPanel>

				<StyledPanel>
					<Panel title={message({ id: 'ASSETS_SUMMARY' })}>
						<div className={styles.groupValues}>
							<TableAssets>
								{session.wallets.status !== 'loaded' && (
									<div className={styles.assetsTableRow}>
										<Skeleton>
											<div style={{ minWidth: 200 }} />
										</Skeleton>
										<Skeleton>
											<div className={styles.headerTitle}>{message({ id: 'PRICE' })}</div>
										</Skeleton>
										<Skeleton>
											<div className={styles.headerTitle}>{message({ id: 'CHANGE_30D' })}</div>
										</Skeleton>
										<Skeleton>
											<div className={styles.headerTitle}>{message({ id: 'HOLDING_VALUE' })}</div>
										</Skeleton>
									</div>
								)}
								{session.wallets.status === 'loaded' 
								&& session.wallets.data.length !== 0 
								&& api.coins.status === 'loaded'
								&& (
									<div className={styles.assetsTableRow}>
										<div />
										<div className={styles.headerTitle}>{message({ id: 'PRICE' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'CHANGE_30D' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'HOLDING_VALUE' })}</div>
									</div>
								)}
								{session.wallets.status === 'loaded'
								&& session.wallets.data.length === 0
								&& (
									<div className={styles.containerFeedback}>
										{message({ id: 'NO_WALLETS_CREATED' })}
									</div>
								)}
								{session.wallets.status === 'loaded' &&
									api.coins.status === 'loaded' &&
									session.wallets.data.map(wallet => {
										const [coin] = api.coins.data.filter(value => wallet.coin_id === value.id)
										const price = coin.market_data.prices[session.currency ?? 'usd']
										return (
											<div key={wallet.coin_id} className={styles.assetsTableRow}>
												<ValueCoin
													srcImageCoin={
														resources.coin[resources.utils.normaliceCoinName(coin.name)].logo
													}
													value={resources.utils.satsToBTC(wallet.balance)}
													name={coin.name}
													shortname={coin.asset}
													decimals={8}
												/>
												<ValuePrice value={price} />
												<SVGValueVariation
													variation={coin.market_data.price_change_30d}
													coordsValueVariation={coin.market_data.chart_1d}
												/>
												<ValuePrice value={price * resources.utils.satsToBTC(wallet.balance)} />
											</div>
										)
									})}
							</TableAssets>
							<CoinAssets>
								{session.wallets.status !== 'loaded' && (
									<div className={styles.containerFeedback}>
										<CircularProgress color="inherit" />
									</div>
								)}
								{session.wallets.status === 'loaded' &&
									api.coins.status === 'loaded' &&
									session.wallets.data.map(wallet => {
										const [coin] = api.coins.data.filter(value => wallet.coin_id === value.id)			
										return (
											<StyledCoinAsset  key={wallet.coin_id}>
												<CoinAsset coin={coin} wallet={wallet} />
											</StyledCoinAsset>
										)
									})}
							</CoinAssets>
						</div>
					</Panel>
				</StyledPanel>
			</div>
			<div className={styles.secundaryGroup}>
				<StyledPanel>
					<Panel title={message({ id: 'LAST_MOVEMENTS' })}>
						<ContainerCheckbox>
							<StyledCheckbox>
								<Checkbox
									checked={session.excludeRewardTransactions}
									checkCallback={switchExcludeRewardMovements}
									design="standard"
								/>
							</StyledCheckbox>
							<div>{message({ id: 'EXCLUDE_REWARDS' })}</div>
						</ContainerCheckbox>
						<div className={styles.movements}>
							{session.transactions.last.data && session.transactions.last.data.map((tx, index, txs) => (
								<div
									key={tx.id}
									className={styles.movement}
									style={{
										margin: index === txs.length - 1 ? 0 : '',
									}}
								>
									<Transaction data={tx} />
								</div>
							))}
							{session.transactions.last.status === 'loading' && skeletonValues.map((num, index) => (
								<div
									key={num}
									className={styles.movement}
									style={{
										margin: index === skeletonValues.length - 1 ? 0 : '',
									}}
								>
									<TransactionSkeleton />
								</div>
							))}
							{session.transactions.last.data?.length === 0 && (
								<div className={styles.containerFeedback}>
									{message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
								</div>
							)}
						</div>
						<Link to="/transactions" className={styles.allMovements}>
							{message({ id: 'ALL_MOVEMENTS' })}
						</Link>
					</Panel>
				</StyledPanel>
			</div>
		</div>
	)
}

export default Overview
