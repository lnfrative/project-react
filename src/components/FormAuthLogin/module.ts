import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request({
			endpoint: resources.endpoints.post.userCreateAccessToken,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

export { onSubmit }
