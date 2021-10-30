// region import
import React from 'react'

// components
import { GroupDashboard, TableWallets, GroupWallets } from '@/components'

// styles
import styles from './style.css'
// endregion

function GroupDashboardWallets() {
  return (
    <GroupDashboard title="Wallets">
      <div className={styles.table}>
        <TableWallets />
      </div>
      <div className={styles.group}>
        <GroupWallets />
      </div>
    </GroupDashboard>
  )
}

export default GroupDashboardWallets
