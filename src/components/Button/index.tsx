// region import
import React from 'react'

// utilities
import { ButtonProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function Button(props: ButtonProps) {
  return <button {...props.buttonHTMLAttributes} className={styles.button}>{props.title}</button>
}

export default Button
