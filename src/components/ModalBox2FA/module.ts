import { ChangeEventHandler } from 'react'
import { ModalBox2FAProps } from 'interfaces'

function onChange(props: ModalBox2FAProps): ChangeEventHandler<HTMLInputElement> {
	return e => {
		const { value } = e.target
		props.onCode(value)
	}
}

export { onChange }
