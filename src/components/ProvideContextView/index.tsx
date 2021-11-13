// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { ContextViewState } from '@/utilities/Interfaces'

// contexts
import { View } from '@/contexts'
// endregion

const initialState: ContextViewState = {
  name: undefined,
}

function ProvideContextView(props: PropsWithChildren<{}>) {
  const stage = useCommitState<ContextViewState>(initialState)

  return (
    <View.Provider value={stage}>
      {props.children}
    </View.Provider>
  )
}

export default ProvideContextView