// region import
import React, { useContext, useEffect } from 'react'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend, Modal, Captcha } from 'contexts'

// components
import {
	FormAuth,
	InputLabelEmail,
	InputLabelPassword,
	Button,
	LinkForm,
	BackdropLoader,
	ForgotPassword,
	ModalBoxCaptcha,
} from 'components'

// utilties
import { message, resources, requestId } from 'utilities'

// modules
import { openCaptcha, successCaptcha } from './module'

// styles
import styles from './index.module.css'
// endregion

const endlogin = resources.endpoints.post.userCreateAccessToken

function FormAuthLogin() {
	const backend = useContext(Backend)
	const modal = useContext(Modal)
	const captcha = useContext(Captcha)
	const { register, handleSubmit, watch } = useForm()
	const { email, password } = watch
	const params = {
		email: email?.value,
		password: password?.value,
		captcha_hash: captcha.state.hash ?? '',
	}
	const response = backend.response.post({
		endpoint: endlogin,
		params,
	})
	const loading = backend.loading?.id === requestId('post', endlogin, params)

	useEffect(() => {
		if (response?.success) {
			window.location.reload()
		}
	}, [response])

	return (
		<form onSubmit={handleSubmit({ onSubmit: openCaptcha(modal) })}>
			<FormAuth title={message({ id: 'LOG_IN' })}>
				<div className={styles.space}>
					<InputLabelEmail disableError registerInput={register({ name: 'email' })} />
				</div>
				<div className={styles.space}>
					<InputLabelPassword disableError registerInput={register({ name: 'password' })} />
				</div>
				<ForgotPassword />
				<div className={styles.space}>
					<Button
						design="normal"
						buttonHTMLAttributes={{
							type: 'submit',
						}}
						title={message({ id: 'LOG_IN' })}
					/>
				</div>
				<LinkForm
					path={resources.routes.register.base}
					message={message({ id: 'DONT_HAVE_ACCOUNT' })}
					linkName={message({ id: 'SIGN_UP' })}
				/>
			</FormAuth>
			<BackdropLoader open={loading} />
			{modal.state.status === 'open' && (
				<ModalBoxCaptcha onSuccess={successCaptcha(modal, backend, params)} />
			)}
		</form>
	)
}

export default FormAuthLogin
