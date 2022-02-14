// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend, Captcha } from 'contexts'

// hooks
import { useStage, useForm } from 'hooks'

// utilities
import { message, resources, requestId } from 'utilities'

// components
import {
	FormAuth,
	Button,
	CheckboxRhomboidTerms,
	InputLabelEmail,
	InputLabelPassword,
	InputLabelPRepeat,
	LinkForm,
	BackdropLoader,
	Form,
} from 'components'

// module
import { initialState, onCheckTerms, onSubmit } from './module'

// styles
import styles from './index.module.css'
// endregion

const enduser = resources.endpoints.get.user
const endregister = resources.endpoints.post.user

function FormAuthRegister() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const captcha = useContext(Captcha)
	const { register, watch, handleSubmit } = useForm()
	const { password, email, repeatedPassword } = watch
	const params = {
		email: email?.value,
		password: password?.value,
		captcha_hash: captcha.state.hash ?? '',
	}
	const userResponse = backend.response({ endpoint: enduser, method: 'get' })
	const createUserResponse = backend.response({
		endpoint: endregister,
		params,
		method: 'post',
	})
	const loading = backend.loading?.id === requestId('post', endregister, params)

	useEffect(() => {
		if (createUserResponse?.success) {
			document.location.href = '/'
		}
	}, [userResponse, createUserResponse])

	return (
		<Form
			captcha
			formHTMLAttributes={{
				onSubmit: handleSubmit({ onSubmit: onSubmit(backend, params) }),
			}}
		>
			<FormAuth title={message({ id: 'CREATE_AN_ACCOUNT' })}>
				<div className={styles.space}>
					<InputLabelEmail registerInput={register({ name: 'email' })} />
				</div>
				<div className={styles.space}>
					<InputLabelPassword registerInput={register({ name: 'password' })} />
				</div>
				<div className={styles.space}>
					<InputLabelPRepeat
						registerInput={register({ name: 'repeatedPassword' })}
						password={password?.value}
					/>
				</div>
				<div className={styles.space}>
					<CheckboxRhomboidTerms
						checkboxRhomboidProps={{
							onCheck: onCheckTerms(stage),
						}}
					/>
				</div>
				<div className={styles.space}>
					<Button
						design="normal"
						title={message({ id: 'SIGN_UP' })}
						buttonHTMLAttributes={{
							disabled:
								!stage.state.termsAccepted ||
								password?.hasError ||
								email?.hasError ||
								repeatedPassword?.hasError,
							type: 'submit',
						}}
					/>
				</div>
				<LinkForm
					path={resources.routes.login.base}
					message={message({ id: 'ALREADY_HAVE_ACCUONT' })}
					linkName={message({ id: 'LOG_IN' })}
				/>
			</FormAuth>
			<BackdropLoader open={loading} />
		</Form>
	)
}

export default FormAuthRegister
