// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { message, resources } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function GroupPagesDashboard() {
  return (
    <div className={styles.container}>
      <Link to={resources.path.home} className={styles.containerFirst}>
        <div className={styles.titleGradient}>
          {message({ id: 'DASHBOARD' })}
        </div>
      </Link>
      {/* <div className={styles.containerSecond}>
        <div className={styles.title}>
          {message({ id: 'POOL_DATA' })}
        </div>
      </div> */}
    </div>
  )
}

export default GroupPagesDashboard
