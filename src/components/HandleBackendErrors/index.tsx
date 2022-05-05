// region import
import React, { PropsWithChildren, useEffect } from 'react'
import { Snackbar, Alert, Fade } from '@mui/material'

// hooks
import { useStage, useApiStore, useSessionStore } from 'hooks'

// utilities
import { resources } from 'utilities'

// components
import { DialogNotification, SVGIconError, Button } from 'components'

// modules
import { initialState, closeSnackbar, reload } from './module'
// endregion

const { colors } = resources

function HandleBackendErrors(props: PropsWithChildren<{}>) {
	const api = useApiStore()
	const session = useSessionStore()
	const stage = useStage(initialState)

	useEffect(() => {
		const { message } = api.error
		if (api.error.code === 401 && session.user.status === 'loaded') {
			window.location.reload()
		}
		if (message && message !== 'Captcha is invalid!' && message !== 'Unauthenticated.') {
			stage.commitState({
				status: api.error.message === 'CSRF is missing or invalid' ? 'open' : 'snackbar',
				reloadRequired: api.error.message === 'CSRF is missing or invalid',
			})
		}
	}, [api.error.message])

	return (
		<>
			<DialogNotification
				open={stage.state.status === 'open'}
				Icon={<SVGIconError />}
				title="Failure!"
				message={api.error.message}
				onClose={closeSnackbar(stage)}
				ContentAfterMessage={stage.state.reloadRequired && (
					<Button
						title="Reload"
						design="normal"
						buttonHTMLAttributes={{
							type: 'button',
							onClick: reload,
						}}
					/>
				)}
			/>
			<Snackbar
				open={stage.state.status === 'snackbar'}
				autoHideDuration={4000}
				onClose={closeSnackbar(stage)}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				TransitionComponent={Fade}
			>
				<Alert
					style={{ background: colors.passive_pager, color: colors.variety_main }}
					severity="error"
				>
					{api.error.message}
				</Alert>
			</Snackbar>
			{props.children}
		</>
	)
}

export default HandleBackendErrors
