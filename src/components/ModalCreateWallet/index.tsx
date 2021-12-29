// region import
import React, { useContext } from 'react'

// utilities
import { BackendCoin } from '@/utilities/Interfaces'
import { message, resources } from '@/utilities'

// components
import {
  Modal,
  ButtonIcon,
  SVGIconEquis,
  CoinAvailable,
} from '@/components'

// contexts
import { Modal as ContextModal, Backend } from '@/contexts'

// modules
import { closeModal } from './module'

// styles
import styles from './style.css'
// endregion

function ModalCreateWallet() {
  const { response } = useContext(Backend)
  const contextStage = useContext(ContextModal)
  const coins: Array<BackendCoin> = response.get({ endpoint: resources.endpoints.get.coins })?.data

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
          {coins.map((coin) => (
            <CoinAvailable
              key={coin.asset}
              id={coin.asset}
              name={coin.name}
              srcImageCoin={resources.coin[coin.asset].logo}
            />
          ))}
        </div>
      </div>
    </Modal>
  )
}

export default ModalCreateWallet
