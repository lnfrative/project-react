// region import
import React from 'react'

// utilities
import { ValueDecimalProps } from '@/utilities/Interfaces'

// modules
import { nestStyles } from './module'
// endregion

function ValueDecimal(props: ValueDecimalProps) {
  const [integer, decimal] = String(props.value).split('.')
  const styles = nestStyles(props)
  return (
    <div>
      <span className={styles.integer}>{integer}</span>
      <span className={styles.decimal}>
        <span>.</span>
        <span>{decimal}</span>
      </span>
    </div>
  )
}

export default ValueDecimal
