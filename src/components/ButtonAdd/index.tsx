// region import
import React from 'react'

// utilities
import { ButtonAddProps } from '@/utilities/Interfaces'

// components
import { SVGIconCross } from '@/components'

// styles
import styles from './style.css'
// endregion

function ButtonAdd(props: ButtonAddProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerIcon}>
        <SVGIconCross />
      </div>
      <div className={styles.title}>{props.title}</div>
    </div>
  )
}

export default ButtonAdd