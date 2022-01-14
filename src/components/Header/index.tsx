// region import
import React from 'react'

// utilities
import { HeaderProps } from 'interfaces'

// components
import { Banners } from 'components'

// styles
import styles from './index.module.css'
// endregion

function Header(props: HeaderProps) {
  return (
    <>
      <Banners />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.contentHeader}>
            {props.contentHeader}
          </div>
        </div>
        <div className={styles.page}>
          <div className={styles.contentPage}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
