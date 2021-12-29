// region import
import React, { useContext } from 'react'

// utilities
import { CoinAvailableProps } from '@/utilities/Interfaces'

// contexts
import { Modal, Backend } from '@/contexts'

// components
import { ImgCoin } from '@/components'

// modules
import { onClick } from './module'

// styles
import styles from './style.css'
// endregion

function CoinAvailable(props: CoinAvailableProps) {
  const { request } = useContext(Backend)
  const contextModal = useContext(Modal)
  return (
    <div onClick={onClick(props, contextModal, request.get)} role="button" tabIndex={0} className={styles.container}>
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
