import { ContextBackend, SelectOption, Stage } from 'interfaces'
import { OnSelect } from 'types'
import { resources } from 'utilities'

interface State {
	optionSelected?: SelectOption
}

const initialState: State = {
	optionSelected: undefined,
}

function selectSend(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request({
			method: 'post',
			endpoint: resources.endpoints.post.transactions,
			params,
			updateCache: true,
		})
	}
}

export { initialState, selectSend, onSubmit }
