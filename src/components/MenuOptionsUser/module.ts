import { Stage } from 'interfaces'

interface State {
  anchor?: HTMLElement
}

export const initialState: State = {
  anchor: undefined
}

export function handleOpen(stage: Stage<State>) {
  return (e: React.MouseEvent<HTMLDivElement>) => {
    stage.commitState({
      anchor: e.currentTarget
    })
  }
}

export function handleClose(stage: Stage<State>) {
  return () => {
    stage.commitState({
      anchor: undefined
    })
  }
}