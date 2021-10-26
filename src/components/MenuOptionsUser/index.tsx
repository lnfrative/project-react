// region import
import React from 'react'

// components
import { Menu, SVGIconSettings, SVGIconCheck, SVGIconBook, SVGIconLogout } from '@/components'

// styles
import styles from './style.css'
// endregion

function MenuOptionsUser() {
  return (
    <Menu
      content={(
        <div className={styles.menuContent}>
          <div className={styles.group}>
            <div className={styles.containerOption}>
              <SVGIconSettings />
              <span className={styles.label}>Settings</span>
            </div>
          </div>
          <div className={styles.group}>
            <div className={styles.containerOption}>
              <SVGIconCheck />
              <span className={styles.label}>Movement history</span>
            </div>
            <div className={styles.containerOption}>
              <SVGIconBook />
              <span className={styles.label}>Address book</span>
            </div>
          </div>
          <div className={styles.containerOption}>
            <SVGIconLogout />
            <span className={styles.label}>Sign out</span>
          </div>
        </div>
      )}
    >
      <div className={styles.container}>
        S
      </div>
    </Menu>
  )
}

export default MenuOptionsUser
