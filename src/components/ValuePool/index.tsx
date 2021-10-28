// region import
import React from 'react'

// utilities
import { ValuePoolProps } from '@/utilities/Interfaces'

// components
import { ValueDecimal, ValuePercentage } from '@/components'

// styles
import styles from './style.css'
// endregion

function ValuePool(props: ValuePoolProps) {
  return (
    <div className={styles.container}>
      <ValueDecimal value={props.valueDecimal} />
      <ValuePercentage value={props.valuePercentage} />
    </div>
  )
}

export default ValuePool
