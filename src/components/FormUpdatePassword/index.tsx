// region import
import React, { useContext, useEffect } from 'react'
import { Typography } from '@mui/material'

// components
import { Button, ForgotPassword, BackdropLoader, Input } from 'components'

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
	const { handleSubmit, watch, bind } = useForm()

	const params = {
		password: watch.currentPassword?.value,
		new_password: watch.newPassword?.value,
	}

	const passwordChanged = backend.response({
		endpoint: endchangepassword,
		params,
		method: 'post',
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
				<Typography
					sx={{
						marginBottom: 1
					}}
				>
					{message({ id: 'CURRENT_PASSWORD' })}
				</Typography>
				<Input
					bind={bind({ name: 'currentPassword' })}
					attributes={{
						type: 'password',
						name: 'password',
						autoComplete: 'current-password',
						autoCorrect: 'off',
					}}
				/>
			</div>
			<div className={styles.input}>
				<Typography
					sx={{
						marginBottom: 1
					}}
				>
					{message({ id: 'NEW_PASSWORD' })}
				</Typography>
				<Input
					bind={bind({ name: 'newPassword' })}
					attributes={{
						type: 'password',
						name: 'new-password',
						autoComplete: 'new-password',
						autoCorrect: 'off',
					}}
				/>
			</div>
			<div className={styles.input}>
				<Typography
					sx={{
						marginBottom: 1
					}}
				>
					{message({ id: 'REPEAT_PASSWORD' })}
				</Typography>
				<Input
					bind={bind({ name: 'REPEAT_PASSWORD' })}
					attributes={{
						type: 'password',
						name: 'repeat-password',
						autoComplete: 'repeat-password',
						autoCorrect: 'off',
					}}
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
