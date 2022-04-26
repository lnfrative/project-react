// utilities
import { resources, fetcher } from 'utilities'

// stores
import { store } from 'stores'

// actions
import { setApiResendEmailConfirmation } from 'stores/ApiSlice'

export async function resend() {
	store.dispatch(setApiResendEmailConfirmation({
		status: 'loading',
		data: undefined
	}))

	try {
		const { data } = await fetcher({
			url: resources.ep.api.get.resendEmailConfirmation,
			method: 'get',
		})

		store.dispatch(setApiResendEmailConfirmation({
			status: 'nonload',
			data: data || undefined
		}))
	} catch (e) {
		store.dispatch(setApiResendEmailConfirmation({
			status: 'nonload',
			data: undefined
		}))
	}

}
