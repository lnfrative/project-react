import { ContextModalState, Stage, FormRecordBinded } from 'interfaces'
import { postLogin } from 'utilities/fetcher'

export function onSubmit(modal: Stage<ContextModalState>, params: Record<string, any>) {
	return () => {
		modal.commitState({ status: 'open', id: Math.random() })
		postLogin(params)
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
