// region import
import React, { useContext, useEffect } from 'react'

// components
import { InputLabelPassword, Button, ForgotPassword, BackdropLoader } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { message, resources, requestId } from 'utilities'

// hooks
import { useForm } from 'hooks'

// modules
import { onSubmit } from './module'

// styles
import styles from './index.module.css'
// endregion

const endchangepassword = resources.endpoints.post.changePassword

function FormUpdatePassword() {
	const backend = useContext(Backend)
	const { handleSubmit, register, watch } = useForm()

	const params = {
		password: watch.currentPassword?.value,
		new_password: watch.newPassword?.value,
	}

	const passwordChanged = backend.response.post({
		endpoint: endchangepassword,
		params,
	})
	const loading = backend.loading?.id === requestId('post', endchangepassword, params)

	useEffect(() => {
		if (passwordChanged?.success) {
			window.location.reload()
		}
	}, [passwordChanged])

	return (
		<form onSubmit={handleSubmit({ onSubmit: onSubmit(backend, params) })}>
			<div className={styles.input}>
				<InputLabelPassword
					registerInput={register({ name: 'currentPassword' })}
					title={message({ id: 'CURRENT_PASSWORD' })}
				/>
			</div>
			<div className={styles.input}>
				<InputLabelPassword
					registerInput={register({ name: 'newPassword' })}
					title={message({ id: 'NEW_PASSWORD' })}
				/>
			</div>
			<div className={styles.input}>
				<InputLabelPassword
					registerInput={register({ name: 'repeatPassword' })}
					title={message({ id: 'REPEAT_PASSWORD' })}
					confirm={params.password}
				/>
			</div>
			<div className={styles.groupButton}>
				<Button
					title={message({ id: 'CHANGE_PASSWORD' })}
					design="simple"
					buttonHTMLAttributes={{
						type: 'submit',
					}}
				/>
				<div className={styles.linkForgot}>
					<ForgotPassword />
				</div>
			</div>
			<BackdropLoader open={loading} />
		</form>
	)
}

export default FormUpdatePassword
