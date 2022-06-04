// region import
import React from 'react'
import { Redirect } from 'react-router-dom'

// hooks
import { useSessionStore } from 'hooks'

// utilities
import { resources } from 'utilities'

// interfaces
import { MiddlewareProps } from 'interfaces'
// endregion

function Middleware(props: MiddlewareProps) {
	const session = useSessionStore()

	const [requirement] = props.requirements.filter(
		middleware =>
			(middleware === 'auth' && (session.user.status === 'error')) ||
			(middleware === 'guess' && session.user.status === 'loaded') ||
			(middleware === 'verified.email' && session.user.data && !session.user.data.email_verified_at)
	)

	console.log(requirement)
	if (requirement === 'auth') {
		return <Redirect to={resources.routes.login.route.path} />
	}
	if (requirement === 'guess' || requirement === 'verified.email') {
		return <Redirect to={resources.routes.home.base} />
	}
	return props.children
}

export default Middleware
