// region import
import React from 'react'

// utilities
import { MenuProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function Menu(props: MenuProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
        {props.content}
      </div>
      <div className={styles.children}>
        {props.children}
      </div>
    </div>
  )
}

export default Menu
