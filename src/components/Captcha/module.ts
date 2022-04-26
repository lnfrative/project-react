// utilities
import { resources, fetcher } from 'utilities'

// stores
import { store } from 'stores'

// actions
import { setApiCaptchaValidate } from 'stores/ApiSlice'
import { setCaptchaToken } from 'stores/CaptchaSlice'

export function onChange(token: string | null) {
	store.dispatch(setCaptchaToken(token ?? ''))
}

export async function fetchCaptchaValidate() {
	store.dispatch(setApiCaptchaValidate({
		status: 'loading',
		data: undefined,
	}))
	const state = store.getState()
	try {
		const { data } = await fetcher({
			url: resources.ep.api.post.captchaValidate,
			method: 'post',
			params: {
				'g-recaptcha-response': state.captcha.token,
			}
		})

		store.dispatch(setApiCaptchaValidate({
			status: 'nonload',
			data,
		}))
	} catch (e) {
		store.dispatch(setApiCaptchaValidate({
			status: 'nonload',
			data: undefined
		}))
	}
}
