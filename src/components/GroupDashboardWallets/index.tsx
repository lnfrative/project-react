// region import
import React from 'react'

// components
import { GroupDashboard, TableWallets, Card } from '@/components'
// endregion

function GroupDashboardWallets() {
  return (
    <GroupDashboard title="Wallets">
      <Card>
        <TableWallets />
      </Card>
    </GroupDashboard>
  )
}

export default GroupDashboardWallets
