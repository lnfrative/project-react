// region import
import React from 'react'

// components
import {
  HeaderDashboard,
  GroupDashboardBenefits,
  GroupDashboardWallets,
  Modal,
} from '@/components'
// endregion

const Home = () => (
  <HeaderDashboard>
    <GroupDashboardBenefits />
    <GroupDashboardWallets />
    <Modal>
      Modal test.
    </Modal>
  </HeaderDashboard>
)

export default Home
