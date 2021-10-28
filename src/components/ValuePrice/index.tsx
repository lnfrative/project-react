// region import
import React from 'react'

// utilities
import { ValuePriceProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ValuePrice(props: ValuePriceProps) {
  return (
    <div className={styles.container}>
      <span className={styles.sign}>$</span>
      <span className={styles.value}>{props.value}</span>
    </div>
  )
}

export default ValuePrice
