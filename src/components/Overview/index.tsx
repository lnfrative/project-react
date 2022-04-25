// region import
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress, Skeleton } from '@mui/material'

// hooks
import { useStage, useSessionStore, useApiStore } from 'hooks'

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

// utilities
import { resources, message } from 'utilities'

// modules
import { initialState, switchExcludeRewardMovements, fetchSummary, fetchTransactions, fetchWallets } from './module'

// styles
import { StyledPanel, ContainerCheckbox, StyledCheckbox, Values, TableAssets, CoinAssets, StyledCoinAsset } from './style'
import styles from './index.module.css'
// endregion

function Overview() {
	const session = useSessionStore()
	const api = useApiStore()
	const stage = useStage(initialState)

	useEffect(() => {
		if (session.user) {
			fetchSummary()
			fetchWallets()
		}
	}, [session.user])

	useEffect(() => {
		if (session.user) {
			fetchTransactions({
				types: stage.state.excludeRewardMovements ? '1,3,4' : '1,2,3,4,5',
				perPage: 5,
			})
		}
	}, [session.user, stage.state.excludeRewardMovements])

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
								{!session.wallets && (
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
								{session.wallets && session.wallets.length !== 0 && api.coins && (
									<div className={styles.assetsTableRow}>
										<div />
										<div className={styles.headerTitle}>{message({ id: 'PRICE' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'CHANGE_30D' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'HOLDING_VALUE' })}</div>
									</div>
								)}
								{session.wallets && session.wallets.length === 0 && (
									<div className={styles.containerFeedback}>
										{message({ id: 'NO_WALLETS_CREATED' })}
									</div>
								)}
								{session.wallets &&
									api.coins &&
									session.wallets.map(wallet => {
										if (!api.coins) return null
										const [coin] = api.coins.filter(value => wallet.coin_id === value.id)
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
								{!session.wallets && (
									<div className={styles.containerFeedback}>
										<CircularProgress color="inherit" />
									</div>
								)}
								{session.wallets &&
									api.coins &&
									session.wallets.map(wallet => {
										if (!api.coins) return null
										const [coin] = api.coins.filter(value => wallet.coin_id === value.id)			
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
									checked={stage.state.excludeRewardMovements}
									checkCallback={switchExcludeRewardMovements(stage)}
									design="standard"
								/>
							</StyledCheckbox>
							<div>{message({ id: 'EXCLUDE_REWARDS' })}</div>
						</ContainerCheckbox>
						<div className={styles.movements}>
							{session.transactions && session.transactions.map((tx, index, txs) => (
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
							<div className={styles.containerFeedback}>
								{!session.transactions && <CircularProgress color="inherit" />}
								{session.transactions?.length === 0 && message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
							</div>
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
