// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// utilities
import { resources } from 'utilities'

// components
import { PreloadPage } from 'components'

// contexts
import { Backend, Currency } from 'contexts'
// endregion

function ApplicationStart(props: PropsWithChildren<{}>) {
	const currency = useContext(Currency)
	const backend = useContext(Backend)
	const user = backend.response({ endpoint: resources.endpoints.get.user, method: 'get' })
	const coins = backend.response({ endpoint: resources.endpoints.get.coins, method: 'get' })
	const captcha = backend.response({ endpoint: resources.endpoints.get.captchaKey, method: 'get' })

	useEffect(() => {
		backend.request({
			endpoint: resources.endpoints.get.user,
			label: 'LOADING_SESSION',
			method: 'get',
		})
		backend.request({
			endpoint: resources.endpoints.get.captchaKey,
			label: 'RETRIEVING_CAPTCHA_KEY',
			method: 'get',
		})
		backend.request({
			endpoint: resources.endpoints.get.coins,
			label: 'LOADING_COINS',
			method: 'get',
		})
		currency.commitState({ id: 'usd' })
	}, [])

	if (!user || !coins?.success || !captcha?.success) return <PreloadPage />
	return props.children
}

export default ApplicationStart
