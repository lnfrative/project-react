// region import
import React from 'react'

// utilities
import { ImgCoinProps } from 'utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function ImgCoin(props: ImgCoinProps) {
  return (
    <img alt="Coin" className={styles[props.size]} src={props.src} />
  )
}

export default ImgCoin
