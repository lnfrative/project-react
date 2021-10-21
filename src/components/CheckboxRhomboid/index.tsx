// region import
import React, { useRef } from 'react'

// utilities
import { CheckboxRhomboidProps } from '@/utilities/interfaces'

// modules
import { onInputClick } from './module'

// styles
import styles from './style.css'
// endregion

function CheckboxRhomboid(props: CheckboxRhomboidProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <label className={styles.container}>
      <input ref={inputRef} onClick={onInputClick({ inputRef, onCheck: props.onCheck })} type="checkbox" className={styles.input} />
      <span className={styles.checkmark} />
    </label>
  )
}

export default CheckboxRhomboid
