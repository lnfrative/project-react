// region import
import React, { useContext } from 'react'

// components
import { Modal } from '@/components'

// contexts
import { Modal as ContextModal } from '@/contexts'

// styles
import styles from './style.css'
// endregion

function ModalCreateWallet() {
  const contextStage = useContext(ContextModal)
  return (
    <Modal>
      <div className={styles.container}>
        Modal content here.
      </div>
    </Modal>
  )
}

export default ModalCreateWallet
