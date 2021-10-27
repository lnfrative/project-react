// region import
import React from 'react'

// components
import { GroupDashboard, CardValue } from '@/components'

// styles
import styles from './style.css'
// endregion

function GroupDashboardBenefits() {
  return (
    <GroupDashboard title="Benefits">
      <div className={styles.containerCards}>
        <CardValue title="Daily benefits" sign="$" value={32.65} />
        <CardValue title="Monthly benefits" sign="$" value={935} />
        <CardValue title="Yearly  benefits" sign="$" value={11254} />
        <CardValue title="APY" sign="%" value={13.5} />
      </div>
    </GroupDashboard>
  )
}

export default GroupDashboardBenefits
