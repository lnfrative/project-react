import { TwoFactorProps, Stage, ContextModalState, ContextBackend } from 'interfaces'

interface State {
	id?: number
}

const initialState: State = {
	id: undefined,
}

function onCode(props: TwoFactorProps, backend: ContextBackend, modal: Stage<ContextModalState>) {
	return (code: string) => {
		const { endpoint, params, method } = props
		if (code.length === 6 && method && endpoint) {
			modal.commitState({ id: undefined, status: 'close' })
			backend.request[method]({
				endpoint,
				params: {
					...params,
					second_factor: code,
				},
				updateCache: true,
			})
		}
	}
}

export { initialState, onCode }
