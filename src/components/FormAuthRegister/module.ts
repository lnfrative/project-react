import { Stage, ContextBackend } from 'interfaces'
import { resources } from 'utilities'

interface InitialState {
	termsAccepted: boolean
}

function onCheckTerms(stage: Stage<InitialState>) {
	return (value: boolean) => {
		stage.commitState({ termsAccepted: value })
	}
}

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request({
			endpoint: resources.endpoints.post.user,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

const initialState: InitialState = {
	termsAccepted: false,
}

export { onCheckTerms, initialState, onSubmit }
