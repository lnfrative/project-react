// region import
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

// interfaces
import { BackendTransaction } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { ValueDecimal, ValueCoin, ValuePrice, SVGValueVariation, Transaction } from 'components'

// utilities
import { resources, message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function Overview() {
	const backend = useContext(Backend)
	const coins = backend.response({ method: 'get', endpoint: resources.endpoints.get.coins })
	const transactions: Array<BackendTransaction> | undefined = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.transactions,
	})?.data

	useEffect(() => {
		backend.request({ endpoint: resources.endpoints.get.transactions, method: 'get' })
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.mainGroup}>
				<div className={styles.group}>
					<div className={styles.groupTitle}>January 2022</div>
					<div className={styles.groupValues}>
						<div className={styles.value}>
							<ValueDecimal value={900.31} sise="large" sign="$" />
							<div className={styles.valueTitle}>Received</div>
						</div>
						<div className={styles.value}>
							<ValueDecimal value={900.31} sise="large" sign="$" />
							<div className={styles.valueTitle}>Spent</div>
						</div>
						<div className={styles.value}>
							<ValueDecimal value={900.31} sise="large" sign="$" />
							<div className={styles.valueTitle}>Earned</div>
						</div>
						<div className={styles.value}>
							<ValueDecimal value={900.31} sise="large" sign="$" />
							<div className={styles.valueTitle}>Net income</div>
						</div>
					</div>
				</div>

				<div className={styles.group}>
					<div className={styles.groupTitle}>Assets summary</div>
					<div className={styles.groupValues}>
						<div className={styles.assetsTable}>
							<div className={styles.assetsTableRow}>
								<div />
								<div className={styles.headerTitle}>Price</div>
								<div className={styles.headerTitle}>Change (30d)</div>
								<div className={styles.headerTitle}>Holding value</div>
							</div>
							<div className={styles.assetsTableRow}>
								<ValueCoin
									srcImageCoin={resources.coin.dogecash.logo}
									value={0}
									name="DogeCash"
									shortname="DOGEC"
								/>
								<ValuePrice value={25} />
								<SVGValueVariation
									variation={25}
									coordsValueVariation={coins?.data[0].market_data.chart_24h}
								/>
								<ValuePrice value={25} />
							</div>
							<div className={styles.assetsTableRow}>
								<ValueCoin
									srcImageCoin={resources.coin.dogecash.logo}
									value={0}
									name="DogeCash"
									shortname="DOGEC"
								/>
								<ValuePrice value={25} />
								<SVGValueVariation
									variation={25}
									coordsValueVariation={coins?.data[0].market_data.chart_24h}
								/>
								<ValuePrice value={25} />
							</div>
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
						<div className={styles.transactionsFeedback}>
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
