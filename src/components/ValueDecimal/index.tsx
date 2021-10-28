// region import
import React from 'react'

// utilities
import { ValueDecimalProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ValueDecimal(props: ValueDecimalProps) {
  return (
    <div>
      <span className={styles.valueLarge}>25.201</span>
      <span className={styles.valueSmall}>.00000084</span>
    </div>
  )
}

export default ValueDecimal
