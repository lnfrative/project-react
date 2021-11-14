// region import
import React from 'react'

// utilities
import { CoinAvailableProps } from '@/utilities/Interfaces'

// components
import { ImgCoin } from '@/components'

// styles
import styles from './style.css'
// endregion

function CoinAvailable(props: CoinAvailableProps) {
  return (
    <div className={styles.container}>
      <ImgCoin size="small" src={props.srcImageCoin} />
      <div className={styles.details}>
        <div className={styles.id}>{props.id}</div>
        <div className={styles.separator}>-</div>
        <div className={styles.name}>{props.name}</div>
      </div>
    </div>
  )
}

export default CoinAvailable
