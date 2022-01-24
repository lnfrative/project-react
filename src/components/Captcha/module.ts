import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

function onChange(backend: ContextBackend) {
	return (token: string | null) => {
		if (token) {
			backend.request.post({
				endpoint: resources.endpoints.post.captchaValidate,
				params: {
					'g-recaptcha-response': token,
				},
				updateCache: true,
			})
		}
	}
}

export { onChange }
