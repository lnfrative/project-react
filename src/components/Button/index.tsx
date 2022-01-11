// region import
import React from 'react'

// utilities
import { ButtonProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function Button(props: ButtonProps) {
  return <button {...props.buttonHTMLAttributes} className={styles.button}>{props.title}</button>
}

export default Button
