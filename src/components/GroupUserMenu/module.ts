import { Stage } from 'interfaces'

interface State {
  notificationsAnchor?: HTMLElement,
}

export const initialState: State = {
  notificationsAnchor: undefined
}

export function openNotifications(stage: Stage<State>) {
  return (e: React.MouseEvent<HTMLButtonElement>) => {
    stage.commitState({
      notificationsAnchor: e.currentTarget,
    })
  }
}

export function closeNotifications(stage: Stage<State>) {
  return () => {
    stage.commitState({
      notificationsAnchor: undefined
    })
  }
}