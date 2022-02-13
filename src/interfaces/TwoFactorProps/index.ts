import { BackendRequestMethodsAllowed } from 'types'

interface TwoFactorProps {
	endpoint: string
	method: BackendRequestMethodsAllowed
	params?: Record<string, any>
	onSuccess: (requestId: string) => void
}

export default TwoFactorProps
