// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// components
import { ValueDecimal, ValueCoin, ValuePrice, SVGValueVariation } from 'components'

// utilities
import { resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function Overview() {
	const backend = useContext(Backend)
	const coins = backend.response({ method: 'get', endpoint: resources.endpoints.get.coins })
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
					<div className={styles.groupTitle}>Last movements</div>
					<div className={styles.movements}>
						<div className={styles.movement}>
							<div className={styles.movementImg} />
							<div className={styles.movementData}>
								<div className={styles.movementGroupData}>
									<div className={styles.movementPriceUp}>+0.1288</div>
									<div>09.31.20</div>
								</div>
								<div className={styles.movementGroupData}>
									<div>0.123 USD</div>
									<div>Staking earnings</div>
								</div>
							</div>
						</div>

						<div className={styles.movement}>
							<div className={styles.movementImg} />
							<div className={styles.movementData}>
								<div className={styles.movementGroupData}>
									<div className={styles.movementPriceUp}>+0.1288</div>
									<div>09.31.20</div>
								</div>
								<div className={styles.movementGroupData}>
									<div>0.123 USD</div>
									<div>Staking earnings</div>
								</div>
							</div>
						</div>

						<div className={styles.movement}>
							<div className={styles.movementImg} />
							<div className={styles.movementData}>
								<div className={styles.movementGroupData}>
									<div className={styles.movementPriceUp}>+0.1288</div>
									<div>09.31.20</div>
								</div>
								<div className={styles.movementGroupData}>
									<div>0.123 USD</div>
									<div>Staking earnings</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.allMovements}>All movements</div>
				</div>
			</div>
		</div>
	)
}

export default Overview
