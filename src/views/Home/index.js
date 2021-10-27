// region import
import React from 'react'

// components
import {
  // GridForm,
  // FormAuthLogin,
  HeaderDashboard,
  GroupDashboardBenefits,
} from '@/components'

// styles
// import styles from './styles.css'
// endregion

const Home = () => (
  // <GridForm className={styles.container}>
  //   <FormAuthLogin />
  // </GridForm>
  <HeaderDashboard>
    <GroupDashboardBenefits />
  </HeaderDashboard>
)

export default Home
