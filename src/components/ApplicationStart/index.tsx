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
	const user = backend.response.get({ endpoint: resources.endpoints.get.user })
	const coins = backend.response.get({ endpoint: resources.endpoints.get.coins })

	useEffect(() => {
		backend.request.get({ endpoint: resources.endpoints.get.user, label: 'LOADING_SESSION' })
		backend.request.get({ endpoint: resources.endpoints.get.coins, label: 'LOADING_COINS' })
		currency.commitState({ id: 'usd' })
	}, [])

	if (!user || !coins?.success) return <PreloadPage />
	return props.children
}

export default ApplicationStart
