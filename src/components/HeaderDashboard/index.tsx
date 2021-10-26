// region import
import React from 'react'

// components
import { GroupBrand, GroupDashboardPages, MenuOptionsUser } from '@/components'

// utilities
import { HeaderDashboardProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

const HeaderDashboard = (props: HeaderDashboardProps) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.firstGroup}>
          <GroupBrand />
          <GroupDashboardPages />
        </div>

        <div className={styles.secondGroup}>
          <MenuOptionsUser />
        </div>
      </div>
    </div>
    <div className={styles.page}>
      {props.children}
    </div>
  </div>
)

export default HeaderDashboard
