import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endrecoverpassword = resources.endpoints.post.recoverPassword

function onSubmit(backend: ContextBackend, params: Record<string, any>) {
	return () => {
		backend.request({
			endpoint: endrecoverpassword,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

export { onSubmit }
