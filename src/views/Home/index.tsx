// region import
import React, { useContext, useEffect } from 'react'

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
  PreloadPage,
} from '@/components'
// endregion

function Dashboard() {
  const { request, response } = useContext(Backend)
  const wallets = response.get({ endpoint: resources.endpoints.get.wallets })

  useEffect(() => {
    request.get({ endpoint: resources.endpoints.get.wallets })
  }, [])

  if (!wallets?.success) return <PreloadPage />
  return (
    <HeaderDashboard>
      <GroupDashboardBenefits />
      <GroupDashboardWallets />
    </HeaderDashboard>
  )
}

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
