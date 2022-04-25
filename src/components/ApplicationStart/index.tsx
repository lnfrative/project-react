// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// utilities
import { resources } from 'utilities'

// hooks
import { useSessionStore } from 'hooks'

// components
import { PreloadPage } from 'components'

// contexts
import { Backend, Currency } from 'contexts'

// modules
import { fetchSession, fetchCoins } from './module'
// endregion

function ApplicationStart(props: PropsWithChildren<{}>) {
	const session = useSessionStore()
	const currency = useContext(Currency)
	const backend = useContext(Backend)

	useEffect(() => {
		fetchSession()
		backend.request({
			endpoint: resources.endpoints.get.captchaKey,
			label: 'RETRIEVING_CAPTCHA_KEY',
			method: 'get',
		})
		currency.commitState({ id: 'usd' })
	}, [])

	useEffect(() => {
		if (session.user) {
			fetchCoins()
		}
	}, [session.user])

	return (
		<>
			{session.status === 'loading' && (
				<PreloadPage />
			)}
			{props.children}
		</>
	)
}

export default ApplicationStart
