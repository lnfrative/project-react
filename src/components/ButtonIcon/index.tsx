// region import
import React from 'react'

// utilities
import { ButtonIconProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ButtonIcon(props: ButtonIconProps) {
  return (
    <button className={styles.button}>
      {props.children}
    </button>
  )
}

export default ButtonIcon
