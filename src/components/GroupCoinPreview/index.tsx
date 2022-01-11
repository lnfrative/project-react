// region import
import React from 'react'

// utilities
import { GroupCoinPreviewProps } from 'interfaces'

// components
import { ImgCoin } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupCoinPreview(props: GroupCoinPreviewProps) {
  return (
    <div className={styles.container}>
      <ImgCoin size="large" src={props.srcImgCoin} />
      <div className={styles.details}>
        <div className={styles.nameCoin}>{props.nameCoin}</div>
        <div className={styles.idCoin}>{props.idCoin}</div>
      </div>
    </div>
  )
}

export default GroupCoinPreview
