import { ContextBackend, ContextModalState, Stage } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend, modal: Stage<ContextModalState>, params: Record<string, any>) {
	return () => {
		// modal.commitState({ status: 'open', id: Math.random() })
		backend.request({
			endpoint: resources.endpoints.post.userCreateAccessToken,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

function reload() {
	window.location.reload()
}

export { onSubmit, reload }
