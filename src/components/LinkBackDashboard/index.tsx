// region import
import React from 'react'
import { Link } from 'react-router-dom'

// components
import { SVGIconBack } from '@/components'

// utilities
import { message, resources } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function LinkBackDashboard() {
  return (
    <Link to={resources.path.dashboard} className={styles.link}>
      <SVGIconBack />
      <div className={styles.title}>
        <span>{message({ id: 'BACK_TO' })}</span>
        <span style={{ fontWeight: 'bold' }}>{message({ id: 'DASHBOARD' })}</span>
      </div>
    </Link>
  )
}

export default LinkBackDashboard
