// region import
import React, { useContext } from 'react'

// contexts
import { Modal as ContextModal } from '@/contexts'

// utilities
import { message } from '@/utilities'

// components
import { ButtonAdd, ModalCreateWallet } from '@/components'

// modules
import { onClick } from './module'
// endregion

function ButtonAddWallet() {
  const contextStage = useContext(ContextModal)
  return (
    <>
      <ButtonAdd onClick={onClick(contextStage)} title={message({ id: 'ADD_NEW_WALLET' })} />
      {contextStage.state.status === 'open' && (
        <ModalCreateWallet />
      )}
    </>
  )
}

export default ButtonAddWallet
