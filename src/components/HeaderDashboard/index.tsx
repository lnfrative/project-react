// region import
import React from 'react'

// components
import {
  GroupBrand,
  GroupPagesDashboard,
  MenuOptionsUser,
  SVGIconNotifications,
  Header,
} from '@/components'

// utilities
import { HeaderDashboardProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

const HeaderDashboard = (props: HeaderDashboardProps) => (
  <Header
    contentHeader={(
      <>
        <div className={styles.firstGroup}>
          <GroupBrand />
          <div className={styles.headerPages}>
            <GroupPagesDashboard />
          </div>
        </div>

        <div className={styles.secondGroup}>
          <SVGIconNotifications />
          <MenuOptionsUser character="W" />
        </div>
      </>
    )}
  >
    {props.children}
  </Header>
)

export default HeaderDashboard
