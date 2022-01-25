// region import
import React, { useContext } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend, Captcha } from 'contexts'

// components
import {
	FormAuth,
	InputLabelPassword,
	InputLabelPRepeat,
	Button,
	BackdropLoader,
	Form,
} from 'components'

// utilities
import { message, requestId, resources } from 'utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './index.module.css'
// endregion

const endresetpassword = resources.endpoints.post.resetPassword

function FormAuthResetPassword() {
	const backend = useContext(Backend)
	const captcha = useContext(Captcha)
	const { register, handleSubmit, watch } = useForm()

	const { search } = useLocation()
	const urlSearchParams = new URLSearchParams(search)
	const email = urlSearchParams.get('email') ?? ''
	const token = urlSearchParams.get('token') ?? ''
	const password = watch.password?.value
	const passwordRepeat = watch.passwordRepeat?.value

	const params = {
		token,
		email,
		password,
		password_confirmation: passwordRepeat,
		captcha_hash: captcha.state.hash ?? '',
	}

	const loading = backend.loading?.id === requestId('post', endresetpassword, params)
	const response = backend.response({ endpoint: endresetpassword, params, method: 'post' })

	if (response?.success) return <Redirect to={resources.routes.login.route.path} />
	return (
		<Form
			captcha
			formHTMLAttributes={{
				onSubmit: handleSubmit({ onSubmit: onSubmit(backend, params) }),
			}}
		>
			<FormAuth title="Reset Password">
				<div className={styles.space}>
					<InputLabelPassword registerInput={register({ name: 'password' })} />
				</div>
				<div className={styles.space}>
					<InputLabelPRepeat
						password={password}
						registerInput={register({ name: 'passwordRepeat' })}
					/>
				</div>
				<Button
					design="normal"
					buttonHTMLAttributes={{
						type: 'submit',
					}}
					title={message({ id: 'SEND' })}
				/>
			</FormAuth>
			<BackdropLoader open={loading} />
		</Form>
	)
}

export default FormAuthResetPassword
