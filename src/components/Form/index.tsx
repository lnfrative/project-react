// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// hooks
import { useStage, useForm } from 'hooks'

// contexts
import { Backend } from 'contexts'

// interfaces
import { FormProps } from 'interfaces'

// components
import { DialogNotificationCaptcha } from 'components'

// modules
import { openCaptcha, initialState, successCaptcha, submit, handleClose } from './module'
// endregion

function Form(props: PropsWithChildren<FormProps>) {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const { handleSubmit } = useForm()

	const response = backend.response({ id: props.requestId })

	useEffect(() => {
		const { onSubmit } = props.formHTMLAttributes
		if (stage.state.captchaSolved && onSubmit) {
			submit(onSubmit)
			stage.commitState({ captchaSolved: false })
		}
	}, [stage.state.captchaSolved])

	useEffect(() => {
		if (response?.success && props.onSuccess) {
			props.onSuccess()
		}
	}, [response?.success])

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
