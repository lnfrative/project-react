// region import
import React, { useContext } from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend, Captcha } from 'contexts'

// components
import {
	FormAuth,
	Button,
	BackdropLoader,
	Form,
	Input,
} from 'components'

// utilities
import { message, requestId, resources } from 'utilities'

// modules
import { onSubmit } from './module'
// endregion

const endresetpassword = resources.endpoints.post.resetPassword

function FormAuthResetPassword() {
	const backend = useContext(Backend)
	const captcha = useContext(Captcha)
	const { handleSubmit, watch, bind } = useForm()

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
				<Typography
					sx={{
						marginBottom: 1
					}}
				>
					{message({ id: 'PASSWORD' })}
				</Typography>
				<Input
					bind={bind({ name: 'password' })}
					attributes={{
						type: 'password',
						name: 'new-password',
						autoComplete: 'new-password',
						autoCorrect: 'off',
					}}
				/>
				<Typography
					sx={{
						marginBottom: 1,
						marginTop: 3
					}}
				>
					{message({ id: 'REPEAT_PASSWORD' })}
				</Typography>
				<Input
					bind={bind({ name: 'passwordRepeat' })}
					attributes={{
						type: 'password',
						name: 'current-password',
						autoComplete: 'current-password',
						autoCorrect: 'off',
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

export default FormAuthResetPassword
