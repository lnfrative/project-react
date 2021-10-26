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
        <div className={styles.firstGradient}>
          {message({ id: 'DASHBOARD' })}
        </div>
      </div>
      <div className={styles.containerSecond}>
        <div className={styles.second}>
          {message({ id: 'POOL_DATA' })}
        </div>
      </div>
    </div>
  )
}

export default GroupPagesDashboard
