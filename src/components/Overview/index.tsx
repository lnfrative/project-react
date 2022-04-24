// region import
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

// interfaces
import { BackendTransaction, BackendWallet, BackendCoin } from 'interfaces'

// hooks
import { useStage, useSessionStore } from 'hooks'

// contexts
import { Backend, Currency } from 'contexts'

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
import { initialState, switchExcludeRewardMovements, fetchSummary } from './module'

// styles
import { StyledPanel, ContainerCheckbox, StyledCheckbox, Values, TableAssets, CoinAssets, StyledCoinAsset } from './style'
import styles from './index.module.css'
// endregion

function Overview() {
	const session = useSessionStore()
	const stage = useStage(initialState)
	const currency = useContext(Currency)
	const backend = useContext(Backend)

	const transactionsParams = {
		types: stage.state.excludeRewardMovements ? '1,3,4' : '1,2,3,4,5',
		perPage: 5,
	}

	const wallets: Array<BackendWallet> | undefined = backend.response({
		endpoint: resources.endpoints.get.wallets,
		method: 'get',
	})?.data

	const coins: Array<BackendCoin> | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.coins,
	})?.data

	const transactions: Array<BackendTransaction> | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.transactions,
		params: transactionsParams,
	})?.data

	useEffect(() => {
		fetchSummary()

		backend.request({
			endpoint: resources.endpoints.get.wallets,
			method: 'get',
		})
	}, [])

	useEffect(() => {
		backend.request({
			endpoint: resources.endpoints.get.transactions,
			method: 'get',
			params: transactionsParams,
		})
	}, [transactionsParams])

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
							{!wallets && (
								<div className={styles.containerFeedback}>
									<CircularProgress color="inherit" />
								</div>
							)}
							<TableAssets>
								{wallets && wallets.length !== 0 && coins && (
									<div className={styles.assetsTableRow}>
										<div />
										<div className={styles.headerTitle}>{message({ id: 'PRICE' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'CHANGE_30D' })}</div>
										<div className={styles.headerTitle}>{message({ id: 'HOLDING_VALUE' })}</div>
									</div>
								)}
								{wallets?.length === 0 && (
									<div className={styles.containerFeedback}>
										{message({ id: 'NO_WALLETS_CREATED' })}
									</div>
								)}
								{wallets &&
									coins &&
									wallets.map(wallet => {
										const [coin] = coins.filter(value => wallet.coin_id === value.id)
										const price = coin.market_data.prices[currency.state.id ?? 'usd']
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
								{wallets &&
									coins &&
									wallets.map(wallet => (
										<StyledCoinAsset  key={wallet.coin_id}>
											<CoinAsset wallet={wallet} />
										</StyledCoinAsset>
									))}
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
							{transactions?.map((transaction, index) => (
								<div
									key={transaction.id}
									className={styles.movement}
									style={{
										margin: index === transactions.length - 1 ? 0 : '',
									}}
								>
									<Transaction data={transaction} />
								</div>
							))}
							<div className={styles.containerFeedback}>
								{!transactions && <CircularProgress color="inherit" />}
								{transactions?.length === 0 && message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
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
