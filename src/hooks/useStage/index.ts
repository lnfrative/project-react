import { useReducer } from 'react'
import { Stage } from 'utilities/Interfaces'

function reducer(state: any, commit: any) {
  return { ...state, ...commit }
}

function useStage<S>(initialState: S): Stage<S> {
  const [state, commitState] = useReducer(reducer, initialState)
  return { state, commitState }
}

export default useStage
