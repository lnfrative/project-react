// region import
import React from 'react'

// components
import { GroupDashboard, CardValue } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupDashboardBenefits() {
	return (
		<GroupDashboard title="Benefits">
			<div className={styles.containerCards}>
				<div className={styles.space}>
					<CardValue title="Daily benefits" sign="$" value={32.65} />
				</div>
				<div className={styles.space}>
					<CardValue title="Monthly benefits" sign="$" value={935} />
				</div>
				<div className={styles.space}>
					<CardValue title="Yearly  benefits" sign="$" value={11254} />
				</div>
				<div className={styles.space}>
					<CardValue title="APY" sign="%" value={13.5} />
				</div>
			</div>
		</GroupDashboard>
	)
}

export default GroupDashboardBenefits
