import { Dispatch, SetStateAction, useState } from 'react'

function useCommitState<S>(initialState: S): {
  state: S, commitState: Dispatch<SetStateAction<S>>
} {
  const [state, setState] = useState(initialState)
  const commitState = (commit) => setState({ ...state, ...commit })
  return { state, commitState }
}

export default useCommitState
