// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useStage, useForm } from 'hooks'

// interfaces
import { FormProps } from 'interfaces'

// components
import { DialogNotificationCaptcha } from 'components'

// modules
import { openCaptcha, initialState, successCaptcha, submit, handleClose } from './module'
// endregion

function Form(props: PropsWithChildren<FormProps>) {
	const stage = useStage(initialState)
	const { handleSubmit } = useForm()

	useEffect(() => {
		const { onSubmit } = props.formHTMLAttributes
		if (stage.state.captchaSolved && onSubmit) {
			submit(onSubmit)
			stage.commitState({ captchaSolved: false })
		}
	}, [stage.state.captchaSolved])

	return (
		<form
			{...props.formHTMLAttributes}
			{...(props.captcha
				? { onSubmit: handleSubmit({ onSubmit: openCaptcha(stage) }) }
				: { onSubmit: props.formHTMLAttributes.onSubmit })}
		>
			{props.children}
			<DialogNotificationCaptcha
				open={stage.state.dialog === 'open'}
				onClose={handleClose(stage)}
				onSuccess={successCaptcha(stage)}
			/>
		</form>
	)
}

export default Form
