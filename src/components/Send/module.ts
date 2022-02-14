import { ContextBackend, SelectOption, Stage } from 'interfaces'
import { OnSelect } from 'types'
import { resources } from 'utilities'

interface State {
	optionSelected?: SelectOption
	status?: 'clear' | 'completed'
}

const initialState: State = {
	optionSelected: undefined,
	status: 'clear',
}

function selectSend(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

function onSubmit(backend: ContextBackend, params: Record<string, any>) {
	return () => {
		backend.request({
			method: 'post',
			endpoint: resources.endpoints.post.transactions,
			params,
			updateCache: true,
		})
	}
}

function success(stage: Stage<State>, successCallback: Function) {
	return () => {
		successCallback()
		stage.commitState({ status: 'completed' })
	}
}

function resetStatus(stage: Stage<State>) {
	return () => {
		stage.commitState({ status: 'clear' })
	}
}

export { initialState, selectSend, onSubmit, success, resetStatus }
