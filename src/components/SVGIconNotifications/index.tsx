// region import
import React from 'react'

// styles
import styles from './index.module.css'
// endregion

function SVGIconNotifications() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg">
      <path className={styles.design} d="M9.667 23.563a2.424 2.424 0 0 0 2.416-2.417H7.25a2.424 2.424 0 0 0 2.417 2.416Zm7.25-7.25V10.27c0-3.71-1.97-6.815-5.438-7.637v-.821A1.81 1.81 0 0 0 9.667 0a1.81 1.81 0 0 0-1.813 1.813v.821c-3.456.822-5.437 3.915-5.437 7.637v6.041L0 18.73v1.209h19.333v-1.209l-2.416-2.416ZM14.5 17.52H4.834v-7.25c0-2.997 1.824-5.438 4.833-5.438 3.009 0 4.833 2.441 4.833 5.438v7.25Z"/>
    </svg>
  )
}

export default SVGIconNotifications
