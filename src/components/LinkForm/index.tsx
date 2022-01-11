// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { LinkFormProps } from 'utilities/Interfaces'

// styles
import styles from './index.module.css'
// endregion

function LinkForm(props: LinkFormProps) {
  return (
    <div className={styles.container}>
      <span className={styles.message}>{props.message}</span>
      <Link className={styles.link} to={props.path}>{props.linkName}</Link>
    </div>
  )
}

export default LinkForm
