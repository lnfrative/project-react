import { ChangeEventHandler } from 'react'
import { DialogNotification2FAProps } from 'interfaces'

function onChange(props: DialogNotification2FAProps): ChangeEventHandler<HTMLInputElement> {
	return e => {
		const { value } = e.target
		props.onCode(value)
	}
}

export { onChange }
