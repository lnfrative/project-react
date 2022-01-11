import { Dispatch, SetStateAction } from 'react'

interface Stage<S> {
  state: S,
  commitState: Dispatch<SetStateAction<S>>
}

export default Stage
