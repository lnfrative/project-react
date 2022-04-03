// region import
import React, { useContext } from 'react'
import { Typography, Box } from '@mui/material'

// contexts
import { Backend, Captcha } from 'contexts'

// hooks
import { useForm } from 'hooks'

// components
import { FormAuth, Button, BackdropLoader, Form, Input } from 'components'

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
	const captcha = useContext(Captcha)
	const { handleSubmit, watch, bind } = useForm()
	const { email } = watch
	const params = {
		email: email?.value,
		captcha_hash: captcha.state.hash ?? '',
	}

	const response = backend.response({ endpoint: endrecoverpassword, params, method: 'post' })
	const loading = backend.loading?.id === requestId('post', endrecoverpassword, params)

	if (response?.success) {
		return <div className={styles.success}>{message({ id: 'VERIFICATION_EMAIL_SENT' })}</div>
	}
	return (
		<Form
			captcha
			formHTMLAttributes={{
				onSubmit: handleSubmit({ onSubmit: onSubmit(backend, params) }),
			}}
		>
			<FormAuth title={message({ id: 'RECOVER_PASSWORD' })}>
				<Typography
					sx={{
						marginBottom: 1
					}}
				>
					{message({ id: 'EMAIL' })}
				</Typography>
				<Input
					bind={bind({ name: 'email' })}
					attributes={{
						type: 'email',
						name: 'email',
						autoCorrect: 'off',
						autoComplete: 'email',
					}}
				/>
				<Box
					sx={{
						marginTop: 4
					}}
				>
					<Button
						design="normal"
						buttonHTMLAttributes={{
							type: 'submit',
						}}
						title={message({ id: 'SEND' })}
					/>
				</Box>
			</FormAuth>
			<BackdropLoader open={loading} />
		</Form>
	)
}

export default FormAuthRecoverPassword
