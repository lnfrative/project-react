// region import
import React, { useContext } from 'react'

// utilities
import { message } from '@/utilities'

// components
import { Modal, ButtonIcon, SVGIconEquis } from '@/components'

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
      </div>
    </Modal>
  )
}

export default ModalCreateWallet
