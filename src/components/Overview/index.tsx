// region import
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

// interfaces
import { BackendTransaction, BackendSummary, BackendWallet, BackendCoin } from 'interfaces'

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
} from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import { StyledPanel } from './style'
import styles from './index.module.css'
// endregion

function Overview() {
	const currency = useContext(Currency)
	const backend = useContext(Backend)
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
	})?.data
	const summary: BackendSummary | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.summary,
	})?.data

	useEffect(() => {
		backend.request({ endpoint: resources.endpoints.get.transactions, method: 'get' })
		backend.request({
			endpoint: resources.endpoints.get.summary,
			method: 'get',
		})
		backend.request({
			endpoint: resources.endpoints.get.wallets,
			method: 'get',
		})
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.mainGroup}>
				<StyledPanel>
					<Panel title={message({ id: 'LAST_30_DAYS' })}>
						<div className={styles.groupValues}>
							{summary && (
								<>
									<ValueDecimalLabel
										decimals={2}
										value={summary.received}
										sise="large"
										sign="$"
										title={message({ id: 'RECEIVED' })}
									/>
									<ValueDecimalLabel
										decimals={2}
										value={summary.spent}
										sise="large"
										sign="$"
										title={message({ id: 'SPENT' })}
									/>
									<ValueDecimalLabel
										decimals={2}
										value={summary.earned}
										sise="large"
										sign="$"
										title={message({ id: 'EARNED' })}
									/>
									<ValueDecimalLabel
										decimals={2}
										value={summary.net}
										sise="large"
										sign="$"
										title={message({ id: 'NET_INCOME' })}
									/>
								</>
							)}
							{!summary && (
								<div className={styles.containerFeedback}>
									<CircularProgress color="inherit" />
								</div>
							)}
						</div>
					</Panel>
				</StyledPanel>

				<StyledPanel>
					<Panel title={message({ id: 'ASSETS_SUMMARY' })}>
						<div className={styles.groupValues}>
							<div className={styles.assetsTable}>
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
								{!wallets && (
									<div className={styles.containerFeedback}>
										<CircularProgress color="inherit" />
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
							</div>
						</div>
					</Panel>
				</StyledPanel>
			</div>
			<div className={styles.secundaryGroup}>
				<StyledPanel>
					<Panel title={message({ id: 'LAST_MOVEMENTS' })}>
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
