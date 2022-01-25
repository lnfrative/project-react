import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endrecoverpassword = resources.endpoints.post.recoverPassword

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return () => {
		backend.request.post({
			endpoint: endrecoverpassword,
			params,
			updateCache: true,
		})
	}
}

export { onSubmit }
