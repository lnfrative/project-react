// region import
import React from 'react'

// utilities
import { ValueCoinProps } from '@/utilities/Interfaces'

// components
import { ImgCoin } from '@/components'

// styles
import styles from './style.css'
// endregion

function ValueCoin(props: ValueCoinProps) {
  return (
    <div className={styles.container}>
      <ImgCoin size="medium" src={props.srcImageCoin} />
      <div>
        <div>
          <span className={styles.numberLarge}>25.201</span>
          <span className={styles.numberSmall}>.00000084</span>
        </div>
        <div className={styles.containerName}>
          <span>{props.name}</span>
          <span>-</span>
          <span className={styles.shortname}>{props.shortname}</span>
        </div>
      </div>
    </div>
  )
}

export default ValueCoin
