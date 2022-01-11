// region import
import React from 'react'

// utilities
import { FormAuthProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function FormAuth(props: FormAuthProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      {props.children}
    </div>
  )
}

export default FormAuth
