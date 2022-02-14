// region import
import React, { useContext, useEffect } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

// components
import { BackdropLoader } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources, message, requestId } from 'utilities'
// endregion

function ConfirmEmail() {
	const backend = useContext(Backend)
	const location = useLocation()

	const params = new URLSearchParams(location.search)
	const verifyURL = decodeURIComponent(params.get('verify_url') ?? '')
	const endpointSSL = verifyURL
		.replace(/http:\/\//g, 'https://')
		.split(`${process.env.REACT_APP_API}`)[1]
	const endpoint = verifyURL.split(`${process.env.REACT_APP_API}`)[1]
	const emailVerify = backend.response({
		endpoint: endpoint ?? endpointSSL,
		method: 'get',
	})
	const loading = backend.loading?.id === requestId('get', endpoint ?? endpointSSL)

	useEffect(() => {
		if (endpoint) {
			backend.request({ endpoint, method: 'get' })
			backend.request({ endpoint: resources.endpoints.get.user, updateCache: true, method: 'get' })
		} else if (endpointSSL && !endpoint) {
			backend.request({ endpoint: endpointSSL, method: 'get' })
			backend.request({ endpoint: resources.endpoints.get.user, updateCache: true, method: 'get' })
		}
	}, [])

	if (!verifyURL) {
		return <Redirect to={resources.routes.home.base} />
	}
	if (emailVerify?.status === 200) {
		return <Redirect to={resources.routes.home.base} />
	}
	return <BackdropLoader open={loading} message={message({ id: 'VERIFYING_EMAIL' })} />
}

export default ConfirmEmail
