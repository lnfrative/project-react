import { ContextModalState, Stage } from 'interfaces'

function onClose(modal: Stage<ContextModalState>) {
	return () => {
		modal.commitState({ id: undefined, status: 'close' })
	}
}

export { onClose }
