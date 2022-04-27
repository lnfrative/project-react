import { AsyncResource } from 'interfaces'

interface TwoFactorProps {
	asyncResource?: AsyncResource<any>,
	callback: () => void,
	onSuccess: () => void
}

export default TwoFactorProps
