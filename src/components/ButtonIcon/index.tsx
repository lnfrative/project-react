// region import
import React, { PropsWithChildren } from 'react'

// utilities
import { ButtonIconProps } from 'utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ButtonIcon(props: PropsWithChildren<ButtonIconProps>) {
  return (
    <button type="button" onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  )
}

export default ButtonIcon
