// region import
import React from 'react'

// utilities
import { SelectOption } from '@/utilities/Interfaces'

// components
import {
  GroupDashboard, TableWallets, GroupWallets, Select,
} from '@/components'

// styles
import styles from './style.css'
// endregion

const testPriceOptions: Array<SelectOption> = [
  { id: 'USD', value: 'USD', main: true },
  { id: 'BTC', value: 'BTC' },
]

const testTimeOptions: Array<SelectOption> = [
  { id: 86400, value: '24 hours', main: true },
  { id: 604800, value: '7 days' },
  { id: 2419200, value: '28 days' },
]

function GroupDashboardWallets() {
  return (
    <GroupDashboard
      title="Wallets"
      afterTitle={(
        <div className={styles.groupSelects}>
          <Select design="filled" title="Price in" options={testPriceOptions} />
          <Select design="filled" title="Last" options={testTimeOptions} />
        </div>
      )}
    >
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
