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

	if (requirement === 'auth') {
		document.location.href = resources.routes.login.route.path
	}
	if (requirement === 'guess') {
		document.location.href = resources.routes.home.base
	}
	if (requirement === 'verified.email') {
		document.location.href = resources.routes.home.route.path
	}
	return props.children
}

export default Middleware
