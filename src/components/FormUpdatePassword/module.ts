import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endchangepassword = resources.endpoints.post.changePassword

function onSubmit(backend: ContextBackend, params: Record<string, string>) {
	return (args: { currentPassword: any; repeatPassword: any; newPassword: any }) => {
		if (args.currentPassword?.hasError) return
		if (args.repeatPassword?.hasError) return
		if (args.newPassword?.hasError) return

		if (!args.currentPassword) return
		if (!args.newPassword) return
		if (!args.repeatPassword) return

		backend.request({
			endpoint: endchangepassword,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

export { onSubmit }
