// region import
import React from 'react'

// components
import { ValueDecimal, ValueCoin, ValuePrice, SVGValueVariation } from 'components'

// utilities
import { resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function Overview() {
	return (
		<div>
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
								coordsValueVariation={[
									[0, 20],
									[1, 20],
									[2, 20],
									[3, 20],
									[4, 20],
									[5, 20],
									[6, 20],
									[7, 20],
									[8, 20],
								]}
							/>
							<ValuePrice value={25} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Overview
