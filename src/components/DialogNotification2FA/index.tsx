// region import
import React from 'react'

// components
import { Input, DialogNotification } from 'components'

// interfaces
import { DialogNotification2FAProps } from 'interfaces'

// utilities
import { message } from 'utilities'

// modules
import { onChange } from './module'
// endregion

function DialogNotification2FA(props: DialogNotification2FAProps) {
	return (
		<DialogNotification
			open={props.open}
			onClose={props.onClose}
			title={message({ id: 'TWO_FACTOR_AUTH' })}
			message={message({ id: 'ENTER_2FA_CODE' })}
			ContentAfterMessage={
				<Input
					attributes={{
						autoFocus: true,
						style: { textAlign: 'center' },
						type: 'text',
						onChange: onChange(props),
					}}
				/>
			}
		/>
	)
}

export default DialogNotification2FA
