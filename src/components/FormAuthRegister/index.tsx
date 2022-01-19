// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend } from 'contexts'

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
	const { register, watch, handleSubmit } = useForm()
	const { password, email, repeatedPassword } = watch
	const params = {
		email: email?.value,
		password: password?.value,
	}
	const userResponse = backend.response.get({ endpoint: enduser })
	const createUserResponse = backend.response.post({
		endpoint: endregister,
		params,
	})
	const loading = backend.loading?.id === requestId('post', endregister, params)

	useEffect(() => {
		if (createUserResponse?.success) {
			document.location.href = '/'
		}
	}, [userResponse, createUserResponse])

	return (
		<form onSubmit={handleSubmit({ onSubmit: onSubmit(backend, stage) })}>
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
			<BackdropLoader open={loading} message={message({ id: 'LONG_TIME_ACTION' })} />
		</form>
	)
}

export default FormAuthRegister
