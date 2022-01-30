import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endsignout = resources.endpoints.post.signout

function signout(backend: ContextBackend) {
	return () => {
		backend.request({
			method: 'post',
			endpoint: endsignout,
		})
	}
}

export { signout }
