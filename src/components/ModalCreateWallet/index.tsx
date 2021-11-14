// region import
import React, { useContext } from 'react'

// utilities
import { message, resources } from '@/utilities'

// components
import {
  Modal,
  ButtonIcon,
  SVGIconEquis,
  CoinAvailable,
} from '@/components'

// contexts
import { Modal as ContextModal } from '@/contexts'

// modules
import { closeModal } from './module'

// styles
import styles from './style.css'
// endregion

function ModalCreateWallet() {
  const contextStage = useContext(ContextModal)
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{message({ id: 'AVAILABLE_COINS' })}</span>
          <ButtonIcon onClick={closeModal(contextStage)}>
            <SVGIconEquis />
          </ButtonIcon>
        </div>
        <div>
          <CoinAvailable
            id="DOGEC"
            name="DogeCash"
            srcImageCoin={resources.coin.dogecash.logo}
          />
          <CoinAvailable
            id="DOGEC"
            name="DogeCash"
            srcImageCoin={resources.coin.dogecash.logo}
          />
          <CoinAvailable
            id="DOGEC"
            name="DogeCash"
            srcImageCoin={resources.coin.dogecash.logo}
          />
        </div>
      </div>
    </Modal>
  )
}

export default ModalCreateWallet
