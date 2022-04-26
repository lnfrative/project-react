// stores
import { store } from 'stores'

// actions
import { setCaptchaToken } from 'stores/CaptchaSlice'

export function onChange(token: string | null) {
	if (token) {
		store.dispatch(setCaptchaToken(token))
	}
}

