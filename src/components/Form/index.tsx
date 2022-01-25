// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// contexts
import { Modal } from 'contexts'

// hooks
import { useStage, useForm } from 'hooks'

// interfaces
import { FormProps } from 'interfaces'

// components
import { ModalBoxCaptcha } from 'components'

// modules
import { openCaptcha, initialState, successCaptcha, submit } from './module'
// endregion

function Form(props: PropsWithChildren<FormProps>) {
	const modal = useContext(Modal)
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
				? { onSubmit: handleSubmit({ onSubmit: openCaptcha(modal, stage) }) }
				: { onSubmit: props.formHTMLAttributes.onSubmit })}
		>
			{props.children}
			{stage.state.id === modal.state.id && modal.state.status === 'open' && (
				<ModalBoxCaptcha onSuccess={successCaptcha(modal, stage)} />
			)}
		</form>
	)
}

export default Form
