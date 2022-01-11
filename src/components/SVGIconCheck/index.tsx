// region import
import React from 'react'

// styles
import styles from './index.module.css'
// endregion

function SVGIconCheck() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg">
      <path className={styles.design} d="M5.77 3.462H0V1.154h5.77v2.308Zm0 3.461H0v2.308h5.77V6.923ZM21.45 15l-4.419-4.42c-.923.6-2.008.959-3.185.959a5.771 5.771 0 0 1-5.769-5.77A5.771 5.771 0 0 1 13.847 0a5.771 5.771 0 0 1 5.769 5.77 5.745 5.745 0 0 1-.958 3.172l4.42 4.431L21.45 15Zm-4.142-9.23a3.472 3.472 0 0 0-3.462-3.462 3.472 3.472 0 0 0-3.461 3.461 3.472 3.472 0 0 0 3.461 3.462 3.472 3.472 0 0 0 3.462-3.462ZM0 15h11.539v-2.308H0V15Z" />
    </svg>
  )
}

export default SVGIconCheck
