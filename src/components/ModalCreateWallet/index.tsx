// region import
import React, { useContext } from 'react'

// utilities
import { BackendCoin } from '@/utilities/Interfaces'
import { BackendWallets } from '@/utilities/Types'
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

const endpointCoins = resources.endpoints.get.coins
const endpointWallets = resources.endpoints.get.wallets

function ModalCreateWallet() {
  const { response } = useContext(Backend)
  const contextStage = useContext(ContextModal)
  const coins: Array<BackendCoin> = response.get({ endpoint: endpointCoins })?.data
  const wallets: BackendWallets = response.get({ endpoint: endpointWallets })?.data

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
          {coins.map((coin) => {
            const [hasWallet] = wallets.filter((wallet) => wallet.ticker === coin.asset)
            if (hasWallet) return null
            return (
              <CoinAvailable
                key={coin.asset}
                id={coin.asset}
                name={coin.name}
                srcImageCoin={resources.coin[coin.asset].logo}
              />
            )
          })}
        </div>
      </div>
    </Modal>
  )
}

export default ModalCreateWallet
