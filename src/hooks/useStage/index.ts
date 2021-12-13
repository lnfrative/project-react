import { useState } from 'react'
import { Stage } from '@/utilities/Interfaces'

function useStage<S>(initialState: S): Stage<S> {
  const [state, setState] = useState(initialState)
  const commitState = (commit) => {
    setTimeout(() => {
      setState({ ...state, ...commit })
    }, 0)
  }
  return { state, commitState }
}

export default useStage
