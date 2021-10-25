// region import
import React from 'react'

// utilities
import { HeaderDashboardProps } from '@/utilities/Interfaces'

// styles
import styles from './styles.css'

const HeaderDashboard = (props: HeaderDashboardProps) => (
  <div className={styles.container}>
    <div className={styles.header} />
    {props.children}
  </div>
)

export default HeaderDashboard
