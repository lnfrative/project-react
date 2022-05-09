// region import
import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material'

// contexts
import { Backend } from 'contexts'

// hooks
import { useStage, useForm, useApiStore } from 'hooks'

// utilities
import { message, resources, requestId } from 'utilities'

// components
import {
	FormAuth,
	Button,
	CheckboxRhomboidTerms,
	LinkForm,
	BackdropLoader,
	Form,
	Input,
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
	const api = useApiStore()


	const { watch, handleSubmit, bind } = useForm()
	const { password, email, repeatedPassword } = watch
	const params = {
		email: email?.value,
		password: password?.value,
		captcha_hash: api.captchaValidate.data,
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
						autoComplete: 'email',
						autoCorrect: 'off',
					}}
				/>
				<Typography
					sx={{
						marginBottom: 1,
						marginTop: 3
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
					bind={bind({ name: 'repeatedPassword' })}
					attributes={{
						type: 'password',
						name: 'current-password',
						autoComplete: 'current-password',
						autoCorrect: 'off',
					}}
				/>
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
							disabled: !stage.state.termsAccepted || !repeatedPassword || !email || !password,
							type: 'submit',
						}}
					/>
				</div>
				<div className={styles.space}>
					<LinkForm
						path={resources.routes.login.base}
						message={message({ id: 'ALREADY_HAVE_ACCUONT' })}
						linkName={message({ id: 'LOG_IN' })}
					/>
				</div>
			</FormAuth>
			<BackdropLoader open={loading} message={message({ id: 'LONG_TIME_ACTION' })} />
		</Form>
	)
}

export default FormAuthRegister
