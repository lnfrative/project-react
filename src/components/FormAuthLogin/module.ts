import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend, params: Record<string, any>) {
	return () => {
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
