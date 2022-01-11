// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useStage } from 'hooks'

// utilities
import { ContextModalState } from 'interfaces'

// contexts
import { Modal } from 'contexts'
// endregion

const initialState: ContextModalState = {
  status: 'close',
  id: undefined,
}

function ProvideContextModal(props: PropsWithChildren<{}>) {
  const stage = useStage(initialState)
  return (
    <Modal.Provider value={stage}>
      {props.children}
    </Modal.Provider>
  )
}

export default ProvideContextModal
