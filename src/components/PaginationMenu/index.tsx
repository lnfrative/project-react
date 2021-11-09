// region import
import React from 'react'

// utilities
import { PaginationMenuProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function PaginationMenu(props: PaginationMenuProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

export default PaginationMenu
