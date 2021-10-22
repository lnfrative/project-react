// region import
import React from 'react'

// utilities
import { InputLabelProps } from '@/utilities/Interfaces'

// components
import { Input } from '@/components'

// style
import styles from './style.css'
// endregion

function InputLabel(props: InputLabelProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <Input {...props.inputProps} />
    </div>
  )
}

export default InputLabel
