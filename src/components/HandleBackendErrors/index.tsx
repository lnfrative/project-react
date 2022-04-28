// region import
import React, { PropsWithChildren, useEffect } from 'react'

// hooks
import { useStage, useApiStore, useSessionStore } from 'hooks'

// components
import { DialogNotification, SVGIconError, Button } from 'components'

// modules
import { initialState, closeSnackbar, reload } from './module'
// endregion

function HandleBackendErrors(props: PropsWithChildren<{}>) {
	const api = useApiStore()
	const session = useSessionStore()
	const stage = useStage(initialState)

	useEffect(() => {
		if (api.error.code === 401 && session.user.status === 'loaded') {
			window.location.reload()
		}
		if (api.error.code === 400 && session.user.status === 'error' && api.loginAttempt.status === 'nonload') {
			stage.commitState({
				status: 'open',
				reloadRequired: true,
			})
		}
	}, [api.error])

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
						title="Reaload"
						design="normal"
						buttonHTMLAttributes={{
							type: 'button',
							onClick: reload,
						}}
					/>
				)}
			/>
			{props.children}
		</>
	)
}

export default HandleBackendErrors
