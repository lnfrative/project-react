// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// hooks
import { useForm } from 'hooks'

// components
import { FormAuth, InputLabelEmail, Button, BackdropLoader } from 'components'

// utilities
import { message, resources, requestId } from 'utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './index.module.css'
// endregion

const endrecoverpassword = resources.endpoints.post.recoverPassword

function FormAuthRecoverPassword() {
	const backend = useContext(Backend)
	const { register, handleSubmit, watch } = useForm()
	const { email } = watch
	const params = { email: email?.value }

	const response = backend.response({ endpoint: endrecoverpassword, params, method: 'post' })
	const loading = backend.loading?.id === requestId('post', endrecoverpassword, params)

	if (response?.success) {
		return <div className={styles.success}>{message({ id: 'VERIFICATION_EMAIL_SENT' })}</div>
	}
	return (
		<form onSubmit={handleSubmit({ onSubmit: onSubmit(backend) })}>
			<FormAuth title={message({ id: 'RECOVER_PASSWORD' })}>
				<div className={styles.space}>
					<InputLabelEmail disableError registerInput={register({ name: 'email' })} />
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
		</form>
	)
}

export default FormAuthRecoverPassword
