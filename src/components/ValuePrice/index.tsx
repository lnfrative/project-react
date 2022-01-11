// region import
import React from 'react'

// utilities
import { ValuePriceProps } from 'utilities/Interfaces'

// styles
import styles from './index.module.css'
// endregion

function parsePrice(price: number): string {
  const [number, decimal] = price.toString().split('.')
  if (number === '0' && decimal) {
    return `${number}.${decimal.slice(0, 3)}`
  }
  if (decimal) {
    return `${number}.${decimal.slice(0, 2)}`
  }
  return number
}

function ValuePrice(props: ValuePriceProps) {
  const price = parsePrice(props.value)
  return (
    <div className={styles.container}>
      <span className={styles.sign}>$</span>
      <span className={styles.value}>{price}</span>
    </div>
  )
}

export default ValuePrice
