// region import
import React from 'react'

// utilities
import { ButtonAddProps } from 'interfaces'

// components
import { SVGIconCross } from 'components'

// styles
import styles from './index.module.css'
// endregion

function ButtonAdd(props: ButtonAddProps) {
  return (
    <div role="button" tabIndex={0} onClick={props.onClick} className={styles.container}>
      <div className={styles.containerIcon}>
        <SVGIconCross />
      </div>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

export default ButtonAdd
