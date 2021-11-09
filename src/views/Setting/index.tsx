// region import
import React, { useEffect, useContext } from 'react'

// contexts
import { View as ContextView } from '@/contexts'

// components
import { HeaderSegmentation } from '@/components'
// endregion

function Account() {
  const contextStage = useContext(ContextView)

  useEffect(() => {
    contextStage.commitState({ name: 'Account Settings' })
  }, [])

  return (
    <HeaderSegmentation
      primaryContent={(
        <div />
      )}
      secondaryContent={(
        <div />
      )}
    />
  )
}

export default Account
