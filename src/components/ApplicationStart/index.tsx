// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useSessionStore } from 'hooks'

// components
import { PreloadPage } from 'components'

// utilities
import { fetchSession, fetchCoins, fetchCaptchaKey, fetchBalance } from 'utilities/fetcher'
// endregion

function ApplicationStart(props: PropsWithChildren<{}>) {
	const session = useSessionStore()

	useEffect(() => {
		fetchSession()
		fetchCaptchaKey()
	}, [])

	useEffect(() => {
		if (session.user.status === 'loaded') {
			fetchCoins()
			fetchBalance()
		}
	}, [session.user])

	return (
		<>
			{session.user.status === 'loading' && (
				<PreloadPage />
			)}
			{props.children}
		</>
	)
}

export default ApplicationStart
