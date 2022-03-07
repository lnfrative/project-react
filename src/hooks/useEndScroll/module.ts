import { Stage, EndScrollParams } from 'interfaces'

interface State {
  endScroll: boolean
}

export const initialState: State = {
  endScroll: false
}

export function handleScroll(params: EndScrollParams, stage: Stage<State>) {
  return () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
		const currentEndScroll = maxScroll - params.ep <= document.documentElement.scrollTop
		if (currentEndScroll !== stage.state.endScroll) {
      stage.commitState({
        endScroll: currentEndScroll
      })
    }
  }
}