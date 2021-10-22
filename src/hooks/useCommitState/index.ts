import { useState } from 'react'
import { Stage } from '@/utilities/interfaces'

function useCommitState<S>(initialState: S): Stage<S> {
  const [state, setState] = useState(initialState)
  const commitState = (commit) => setState({ ...state, ...commit })
  return { state, commitState }
}

export default useCommitState
