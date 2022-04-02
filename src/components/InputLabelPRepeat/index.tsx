// region import
import React from 'react'

// utilities
import { message } from 'utilities'
import { InputLabelPRepeatProps } from 'interfaces'

// components
import { InputLabel } from 'components'

// hooks
import { useStage } from 'hooks'

// modules
import { initialState, onChange } from './module'
// endregion

function InputLabelPRepeat(props: InputLabelPRepeatProps) {
	const stage = useStage(initialState)
	return (
		<InputLabel
			inputProps={{
				error: stage.state.error,
				InputHTMLAttributes: {
					type: 'password',
					name: 'repeatedPassword',
					onChange: onChange(stage, props),
				},
			}}
			title={message({ id: 'REPEAT_PASSWORD' })}
		/>
	)
}

export default InputLabelPRepeat
