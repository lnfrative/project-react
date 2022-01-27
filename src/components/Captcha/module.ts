import { ContextBackend, Stage, ContextCaptchaState } from 'interfaces'
import { resources } from 'utilities'

function onChange(backend: ContextBackend, captcha: Stage<ContextCaptchaState>) {
	return (token: string | null) => {
		if (token) {
			captcha.commitState({ 'g-recaptcha-response': token })
			backend.request({
				endpoint: resources.endpoints.post.captchaValidate,
				params: {
					'g-recaptcha-response': token,
				},
				updateCache: true,
				method: 'post',
			})
		}
	}
}

export { onChange }
