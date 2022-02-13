import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend, params: Record<string, any>) {
	return () => {
		backend.request({
			endpoint: resources.endpoints.post.resetPassword,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

export { onSubmit }
