// region import
import React, { useContext } from 'react'

// hooks
import { useCommitState } from '@/hooks'

// contexts
import { Modal as ContextModal } from '@/contexts'

// utilities
import { message } from '@/utilities'

// components
import { ButtonAdd, ModalCreateWallet } from '@/components'

// modules
import { onClick, State } from './module'
// endregion

function ButtonAddWallet() {
  const stage = useCommitState<State>({ id: Math.random() })
  const contextStage = useContext(ContextModal)
  return (
    <>
      <ButtonAdd onClick={onClick(stage, contextStage)} title={message({ id: 'ADD_NEW_WALLET' })} />
      {contextStage.state.status === 'open'
      && contextStage.state.id === stage.state.id
      && (
        <ModalCreateWallet />
      )}
    </>
  )
}

export default ButtonAddWallet
