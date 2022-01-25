import { ContextBackend } from 'interfaces'
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

export { onSubmit }
