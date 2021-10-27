// region import
import React from 'react'

// utilities
import { GroupDashboardProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function GroupDashboard(props: GroupDashboardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <span className={styles.sign}>✖</span>
        <span>{props.title}</span>
      </div>
      {props.children}
    </div>
  )
}

export default GroupDashboard
