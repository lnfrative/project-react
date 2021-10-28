// region import
import React from 'react'

// components
import {
  HeaderDashboard,
  GroupDashboardBenefits,
  GroupDashboardWallets,
} from '@/components'
// endregion

const Home = () => (
  <HeaderDashboard>
    <GroupDashboardBenefits />
    <GroupDashboardWallets />
  </HeaderDashboard>
)

export default Home
