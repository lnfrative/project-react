// region import
import React from 'react'

// styles
import styles from './style.css'
// endregion

function SVGIconDashboard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33">
      <defs>
        <linearGradient id={styles.gradient} x1="48.204" x2="-9.072" y1="11.798" y2="14.043" gradientUnits="userSpaceOnUse">
          <stop className={styles.primaryStop} offset="0" />
          <stop className={styles.secondaryStop} offset="1" />
        </linearGradient>
      </defs>
      <path fill={`url(#${styles.gradient})`} className={styles.design} d="M0 0h14.667v18.333H0V0zm33 0H18.333v11H33V0zM11 14.667v-11H3.667v11H11zm18.333-7.334V3.667H22v3.666h7.333zM33 14.667H18.333V33H33V14.667zm-3.667 3.666v11H22v-11h7.333zM0 22h14.667v11H0V22zm11 7.333v-3.666H3.667v3.666H11z" />
    </svg>
  )
}

export default SVGIconDashboard
