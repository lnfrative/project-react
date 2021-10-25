// region import
import React from 'react'

// components
import { GroupBrand } from '@/components'

// utilities
import { HeaderDashboardProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

const HeaderDashboard = (props: HeaderDashboardProps) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <GroupBrand />
      </div>
    </div>
    <div className={styles.page}>
      {props.children}
    </div>
  </div>
)

export default HeaderDashboard
