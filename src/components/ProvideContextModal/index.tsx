// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { ContextModalState } from '@/utilities/Interfaces'

// contexts
import { Modal } from '@/contexts'
// endregion

const initialState: ContextModalState = {
  status: 'close',
  id: undefined,
}

function ProvideContextModal(props: PropsWithChildren<{}>) {
  const stage = useCommitState(initialState)
  return (
    <Modal.Provider value={stage}>
      {props.children}
    </Modal.Provider>
  )
}

export default ProvideContextModal
