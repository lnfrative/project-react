// region import
import React from 'react'

// utilities
import { SelectProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function Select(props: SelectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {props.title}
      </div>
    </div>
  )
}

export default Select
