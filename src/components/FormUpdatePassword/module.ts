import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endchangepassword = resources.endpoints.post.changePassword

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request.post({
			endpoint: endchangepassword,
			params,
			updateCache: true,
		})
	}
}

export { onSubmit }
