import { ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endconfirmtransaction = resources.endpoints.post.confirmTransaction

function confirmTransaction(backend: ContextBackend, params: Record<string, any>) {
	return () => {
		backend.request({
			method: 'post',
			endpoint: endconfirmtransaction,
			params,
		})
	}
}

function cancel() {
	window.location.href = '/'
}

export { confirmTransaction, cancel }
