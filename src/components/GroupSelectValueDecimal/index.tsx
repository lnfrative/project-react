// region import
import React from 'react'

// utilities
import { GroupSelectValueDecimalProps } from '@/utilities/Interfaces'

// components
import { Select, ValueDecimal } from '@/components'

// styles
import styles from './style.css'
// endregion

function GroupSelectValueDecimal(props: GroupSelectValueDecimalProps) {
  return (
    <div className={styles.container}>
      <Select design="simple" title={props.titleSelect} options={props.optionsSelect} />
      <ValueDecimal sise="medium" value={props.valueDecimal} />
    </div>
  )
}

export default GroupSelectValueDecimal
