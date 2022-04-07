import { ContextBackend, ContextModalState, Stage, FormRecordBinded } from 'interfaces'
import { resources } from 'utilities'

export function onSubmit(backend: ContextBackend, modal: Stage<ContextModalState>, params: Record<string, any>) {
	return () => {
		modal.commitState({ status: 'open', id: Math.random() })
		backend.request({
			endpoint: resources.endpoints.post.userCreateAccessToken,
			params,
			updateCache: true,
			method: 'post',
		})
	}
}

export function reactivateInput(modal: Stage<ContextModalState>, formRecord: FormRecordBinded) {
	return () => {
		modal.commitState({ id: undefined, status: 'close' })
		if (formRecord) {
			setTimeout(() => {
				formRecord.input?.focus()
			}, 0)
		}
	}
}

export function reload() {
	window.location.reload()
}
