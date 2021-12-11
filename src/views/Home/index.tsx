// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from '@/contexts'

// utilities
import { resources } from '@/utilities'

// components
import {
  HeaderDashboard,
  GroupDashboardBenefits,
  GroupDashboardWallets,
  GridForm,
  FormAuthLogin,
} from '@/components'
// endregion

const Dashboard = () => (
  <HeaderDashboard>
    <GroupDashboardBenefits />
    <GroupDashboardWallets />
  </HeaderDashboard>
)

const Login = () => (
  <GridForm>
    <FormAuthLogin />
  </GridForm>
)

function Home() {
  const { response } = useContext(Backend)
  const user = response.get({ endpoint: resources.endpoints.get.user })
  if (!user?.success) return <Login />
  return <Dashboard />
}

export default Home
