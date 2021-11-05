// region import
import React from 'react'

// utilities
import { GroupValueDecimalProps } from '@/utilities/Interfaces'

// components
import { ValueDecimal } from '@/components'

// styles
import styles from './style.css'
// endregion

function GroupValueDecimal(props: GroupValueDecimalProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <ValueDecimal sise="large" value={props.value} />
    </div>
  )
}

export default GroupValueDecimal
