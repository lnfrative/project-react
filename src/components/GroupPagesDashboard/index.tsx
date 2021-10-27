// region import
import React from 'react'

// utilities
import { message } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function GroupPagesDashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.containerFirst}>
        <div className={styles.titleGradient}>
          {message({ id: 'DASHBOARD' })}
        </div>
      </div>
      <div className={styles.containerSecond}>
        <div className={styles.title}>
          {message({ id: 'POOL_DATA' })}
        </div>
      </div>
    </div>
  )
}

export default GroupPagesDashboard
