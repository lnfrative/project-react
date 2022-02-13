// region import
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

// interfaces
import { BackendTransaction, BackendSummary, BackendWallet, BackendCoin } from 'interfaces'

// contexts
import { Backend, Currency } from 'contexts'

// components
import { ValueDecimal, ValueCoin, ValuePrice, SVGValueVariation, Transaction } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
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
				<div className={styles.group}>
					<div className={styles.groupTitle}>{message({ id: 'LAST_30_DAYS' })}</div>
					<div className={styles.groupValues}>
						{summary && (
							<>
								<div className={styles.value}>
									<ValueDecimal decimals={2} value={summary.received} sise="large" sign="$" />
									<div className={styles.valueTitle}>{message({ id: 'RECEIVED' })}</div>
								</div>
								<div className={styles.value}>
									<ValueDecimal decimals={2} value={summary.spent} sise="large" sign="$" />
									<div className={styles.valueTitle}>{message({ id: 'SPENT' })}</div>
								</div>
								<div className={styles.value}>
									<ValueDecimal decimals={2} value={summary.earned} sise="large" sign="$" />
									<div className={styles.valueTitle}>{message({ id: 'EARNED' })}</div>
								</div>
								<div className={styles.value}>
									<ValueDecimal decimals={2} value={summary.net} sise="large" sign="$" />
									<div className={styles.valueTitle}>{message({ id: 'NET_INCOME' })}</div>
								</div>
							</>
						)}
						{!summary && (
							<div className={styles.containerFeedback}>
								<CircularProgress color="inherit" />
							</div>
						)}
					</div>
				</div>

				<div className={styles.group}>
					<div className={styles.groupTitle}>{message({ id: 'ASSETS_SUMMARY' })}</div>
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
												name="DogeCash"
												shortname="DOGEC"
											/>
											<ValuePrice value={price} />
											<SVGValueVariation
												variation={coin.market_data.price_change_30d}
												coordsValueVariation={coin.market_data.chart_24h}
											/>
											<ValuePrice value={price * resources.utils.satsToBTC(wallet.balance)} />
										</div>
									)
								})}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.secundaryGroup}>
				<div className={styles.group}>
					<div className={styles.groupTitle}>{message({ id: 'LAST_MOVEMENTS' })}</div>
					<div className={styles.movements}>
						{transactions?.map(transaction => (
							<Transaction key={transaction.id} data={transaction} />
						))}
						<div className={styles.containerFeedback}>
							{!transactions && <CircularProgress color="inherit" />}
							{transactions?.length === 0 && message({ id: 'EMPTY_TRANSACTIONS_HISTORY' })}
						</div>
					</div>
					<Link to="/transactions" className={styles.allMovements}>
						{message({ id: 'ALL_MOVEMENTS' })}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Overview
