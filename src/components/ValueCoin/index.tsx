// region import
import React from 'react'

// utilities
import { ValueCoinProps } from 'utilities/Interfaces'

// components
import { ImgCoin, ValueDecimal } from 'components'

// styles
import styles from './index.module.css'
// endregion

function ValueCoin(props: ValueCoinProps) {
  return (
    <div className={styles.container}>
      <ImgCoin size="medium" src={props.srcImageCoin} />
      <div>
        <ValueDecimal sise="small" value={props.value} />
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
