// region import
import React from 'react'

// components
import { SVGIconNotifications, MenuOptionsUser } from '@/components'

// styles
import styles from './style.css'
// endregion

function GroupUserMenu() {
  return (
    <div className={styles.container}>
      <SVGIconNotifications />
      <MenuOptionsUser character="W" />
    </div>
  )
}

export default GroupUserMenu
