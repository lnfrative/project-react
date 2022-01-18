// region import
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources } from 'utilities'

// interfaces
import { MiddlewareProps, BackendUser } from 'interfaces'
// endregion

const enduser = resources.endpoints.get.user

function Middleware(props: MiddlewareProps) {
	const { response } = useContext(Backend)
	const user: BackendUser | undefined = response.get({ endpoint: enduser })?.data

	const [requirement] = props.requirements.filter(
		middleware =>
			(middleware === 'auth' && !user?.id) ||
			(middleware === 'guess' && user?.id) ||
			(middleware === 'verified.email' && !user?.email_verified_at)
	)

	if (requirement === 'auth') {
		return <Redirect to={resources.routes.login.route.path} />
	}
	if (requirement === 'guess') {
		return <Redirect to={resources.routes.home.route.path} />
	}
	if (requirement === 'verified.email') {
		return <Redirect to={resources.routes.home.route.path} />
	}
	return props.children
}

export default Middleware
