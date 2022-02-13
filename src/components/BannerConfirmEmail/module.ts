import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function resend(backend: ContextBackend) {
	return () => {
		backend.request({
			method: 'get',
			endpoint: resources.endpoints.get.resendEmailConfirmation,
		})
	}
}

export { resend }
