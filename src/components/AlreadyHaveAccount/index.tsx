// region import
import React from 'react'

// utilities
import { message } from '@/utilities'

// styles
import styles from './style.css'
// endregion

function AlreadyHaveAccount() {
  return (
    <div className={styles.container}>
      <span className={styles.alreadyHaveAccount}>{message({ id: 'ALREADY_HAVE_ACCUONT' })}</span>
      <span className={styles.login}>{message({ id: 'LOG_IN' })}</span>
    </div>
  )
}

export default AlreadyHaveAccount
