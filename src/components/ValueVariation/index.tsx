// region import
import React from 'react'

// utilities
import { ValueVariationProps } from '@/utilities/Interfaces'

// modules
import { nestStyles } from './module'
// endregion

function ValueVariation(props: ValueVariationProps) {
  const styles = nestStyles(props)
  return (
    <div className={styles.container}>
      <span>
        {props.value > 0 ? '+' : '-'}
        {props.value}
      </span>
      <span>%</span>
    </div>
  )
}

export default ValueVariation
