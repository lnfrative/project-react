import { BackendRequestMethodsAllowed } from 'types'

interface TwoFactorProps {
	endpoint: string
	method: BackendRequestMethodsAllowed
	params?: Record<string, string>
}

export default TwoFactorProps
