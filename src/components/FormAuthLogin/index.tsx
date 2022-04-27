// region import
import React, { useContext, useEffect } from 'react'
import { Typography, Box } from '@mui/material'

// hooks
import { useForm, useApiStore, useSessionStore } from 'hooks'

// contexts
import { Modal } from 'contexts'

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
import { message, resources } from 'utilities'

// modules
import { onSubmit, reload, reactivateInput } from './module'

// styles
import styles from './index.module.css'

function FormAuthLogin() {
	const session = useSessionStore()
	const api = useApiStore()
	const modal = useContext(Modal)
	const { handleSubmit, watch, bind } = useForm()
	const { email, password } = watch
	const params = {
		email: email?.value,
		password: password?.value,
		captcha_hash: api.captchaValidate.data,
		second_factor: session.second_factor.code,
	}

	useEffect(() => {
		if (api.loginAttempt.status === 'loaded') {
			reload()
		}
	}, [api.loginAttempt])

	return (
		<TwoFactor
			onSuccess={reload}
			callback={onSubmit(modal, params)}
			asyncResource={api.loginAttempt}
		>
			<Form
				captcha
				formHTMLAttributes={{
					onSubmit: handleSubmit({ onSubmit: onSubmit(modal, params) }),
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
								disabled: api.loginAttempt.status === 'loading' || modal.state.status === 'open',
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
								disabled: api.loginAttempt.status === 'loading' || modal.state.status === 'open',
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
				<BackdropLoader open={api.loginAttempt.status === 'loading'} />
			</Form>
		</TwoFactor>
	)
}

export default FormAuthLogin
