// region import
import React from 'react'

// utilities
import { ImgCoinProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function ImgCoin(props: ImgCoinProps) {
	return <img alt="Coin" className={styles[props.size]} src={props.src} />
}

export default ImgCoin
