import { ContextBackend, ContextModalState, Stage } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request.post({
			endpoint: resources.endpoints.post.userCreateAccessToken,
			params,
			updateCache: true,
		})
	}
}

function openCaptcha(modal: Stage<ContextModalState>) {
	return (args: { email: any; password: any }) => {
		const email = args.email.value
		const password = args.password.value
		if (email && password) {
			modal.commitState({ id: Math.random(), status: 'open' })
		}
	}
}

function successCaptcha(
	modal: Stage<ContextModalState>,
	backend: ContextBackend,
	params: Record<string, string>
) {
	return () => {
		modal.commitState({ id: undefined, status: 'close' })
		onSubmit(backend, params)
	}
}

export { onSubmit, openCaptcha, successCaptcha }
