// region import
import React from 'react'

// components
import { Panel } from 'components'

// styles
import { ContainerFeedback } from './style'
// endregion

function Subscriptions() {
  return (
    <Panel title="Subscriptions">
      <ContainerFeedback>
        You don&apos;t have subscriptions.
      </ContainerFeedback>
    </Panel>
  )
}

export default Subscriptions