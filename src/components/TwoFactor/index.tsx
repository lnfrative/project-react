// region import
import React, { PropsWithChildren, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// hooks
import { useStage, useSessionStore } from 'hooks'

// interfaces
import { TwoFactorProps } from 'interfaces'

// components
import { DialogNotification2FA, BackdropLoader } from 'components'

// actions
import { setSessionSecondFactor } from 'stores/SessionSlice' 

// modules
import { initialState, onCode, handleClose } from './module'
// endregion

function TwoFactor(props: PropsWithChildren<TwoFactorProps>) {
	const session = useSessionStore()
	const stage = useStage(initialState)
	const dispatch = useDispatch()

	useEffect(() => {
		if (session.second_factor.id === stage.state.id && session.second_factor.code) {
			props.callback()
			dispatch(setSessionSecondFactor({ id: 0, code: undefined }))
		}
	}, [session.second_factor])

	useEffect(() => {
		if (props.asyncResource?.error?.second_factor) {
			stage.commitState({ dialog: 'open' })
		}
	}, [props.asyncResource])

	return (
		<>
			<DialogNotification2FA
				open={stage.state.dialog === 'open'}
				onCode={onCode(stage)}
				onClose={handleClose(stage)}
			/>
			<BackdropLoader open={props.asyncResource?.status === 'loading'} />
			{props.children}
		</>
	)
}

export default TwoFactor
