// region import
import React from 'react'

// utilities
import { GroupDashboardProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function GroupDashboard(props: GroupDashboardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.groupTitle}>
        <div className={styles.containerTitle}>
          <span className={styles.sign}>✖</span>
          <span>{props.title}</span>
        </div>
        {props.afterTitle}
      </div>
      {props.children}
    </div>
  )
}

export default GroupDashboard
