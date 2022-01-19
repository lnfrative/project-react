// region import
import React from 'react'

// components
import { GroupValueDecimal } from 'components'

// styles
import styles from './index.module.css'
// endregion

function CoinPaginationOverview() {
	return (
		<div className={styles.container}>
			<div className={styles.containerBenefits}>
				<div className={styles.title}>Pool benefits</div>
				<div className={styles.containerBenefitsValues}>
					<GroupValueDecimal design="bottom" value={90.31203} title="Yesterday" />
					<GroupValueDecimal design="bottom" value={812.14992} title="Last month" />
					<GroupValueDecimal design="bottom" value={9000.14992} title="Last year" />
				</div>
			</div>
			<div className={styles.line} />
			<div className={styles.groupSecondary}>
				<div className={styles.group}>
					<div className={styles.groupValue}>
						<div className={styles.title}>Pool share</div>
						<div className={styles.value}>0.0003%</div>
					</div>
					<div className={styles.groupValue}>
						<div className={styles.title}>APY</div>
						<div className={styles.value}>3%</div>
					</div>
				</div>
				<div className={styles.regards}>
					<div className={styles.title}>Last pool reward</div>
					<div className={styles.title}>09.31.2010:30 pm</div>
				</div>
			</div>
		</div>
	)
}

export default CoinPaginationOverview
