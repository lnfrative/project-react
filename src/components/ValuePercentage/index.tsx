// region import
import React from 'react'

// utilities
import { ValuePercentageProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ValuePercentage(props: ValuePercentageProps) {
  return (
    <div className={styles.container}>
      <span>{props.value}</span>
      <span>%</span>
    </div>
  )
}

export default ValuePercentage
