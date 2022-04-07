// region import
import React, { useContext, useEffect } from 'react'
import { Typography, Box } from '@mui/material'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend, Captcha, Modal } from 'contexts'

// components
import {
	FormAuth,
	Button,
	LinkForm,
	BackdropLoader,
	ForgotPassword,
	Form,
	TwoFactor,
	Input
} from 'components'

// utilties
import { message, resources, requestId } from 'utilities'

// modules
import { onSubmit, reload, reactivateInput } from './module'

// styles
import styles from './index.module.css'
// endregion

const endlogin = resources.endpoints.post.userCreateAccessToken

function FormAuthLogin() {
	const backend = useContext(Backend)
	const captcha = useContext(Captcha)
	const modal = useContext(Modal)
	const { handleSubmit, watch, bind } = useForm()
	const { email, password } = watch
	const params = {
		email: email?.value,
		password: password?.value,
		captcha_hash: captcha.state.hash ?? '',
	}
	const response = backend.response({
		endpoint: endlogin,
		params,
		method: 'post',
	})
	const loading = backend.loading?.id === requestId('post', endlogin, params)

	useEffect(() => {
		if (response?.success) {
			reload()
		}
	}, [response])

	return (
		<TwoFactor onSuccess={reload} endpoint={endlogin} params={params} method="post">
			<Form
				captcha
				formHTMLAttributes={{
					onSubmit: handleSubmit({ onSubmit: onSubmit(backend, modal, params) }),
				}}
			>
				<FormAuth title={message({ id: 'LOG_IN' })}>
					<Typography
						sx={{
							marginBottom: 1
						}}
					>
						{message({ id: 'EMAIL' })}
					</Typography> 
					<Box
						onClick={reactivateInput(modal, email)}
					>
						<Input
							bind={bind({ name: 'email' })}
							attributes={{
								disabled: loading || modal.state.status === 'open',
								type: 'email',
								name: 'email',
								autoComplete: 'email',
								autoCorrect: 'off',
							}}
						/>
					</Box>
					<Typography
						sx={{
							marginBottom: 1,
							marginTop: 3
						}}
					>
						{message({ id: 'PASSWORD' })}
					</Typography>
					<Box
						onClick={reactivateInput(modal, password)}
					>		
						<Input
							bind={bind({ name: 'password' })}
							attributes={{
								disabled: loading || modal.state.status === 'open',
								type: 'password',
								name: 'password',
								autoComplete: 'password',
								autoCorrect: 'off',
							}}
						/>
					</Box>
					<Box
						sx={{
							marginTop: 3,
							marginBottom: 3,
						}}
					>
						<ForgotPassword />
					</Box>
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
			</Form>
		</TwoFactor>
	)
}

export default FormAuthLogin
