// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend } from 'contexts'

// interfaces
import { TwoFactorProps } from 'interfaces'

// components
import { DialogNotification2FA, BackdropLoader } from 'components'

// utilities
import { requestId } from 'utilities'

// modules
import { initialState, onCode, handleClose } from './module'
// endregion

function TwoFactor(props: PropsWithChildren<TwoFactorProps>) {
	const backend = useContext(Backend)
	const stage = useStage(initialState)
	const response = backend.response({
		method: props.method,
		endpoint: props.endpoint,
		params: props.params,
	})

	const params = {
		...props.params,
		second_factor: stage.state.code ?? '',
	}

	const loading = backend.loading?.id === requestId(props.method, props.endpoint, params)

	const responseWithSecondFactor = backend.response({
		endpoint: props.endpoint,
		params,
		method: props.method,
	})

	useEffect(() => {
		const { endpoint, method } = props
		if (stage.state.code) {
			backend.request({
				endpoint,
				params,
				method,
			})
		}
	}, [stage.state.code])

	useEffect(() => {
		if (typeof response?.error === 'object' && response.error) {
			if (response.error.second_factor) {
				stage.commitState({ dialog: 'open' })
			}
		}
	}, [response?.error])

	useEffect(() => {
		if (responseWithSecondFactor?.success) {
			stage.commitState({
				code: undefined,
			})
			props.onSuccess(requestId(props.method, props.endpoint, params))
		}
	}, [responseWithSecondFactor?.success])

	return (
		<>
			<DialogNotification2FA
				open={stage.state.dialog === 'open'}
				onCode={onCode(stage)}
				onClose={handleClose(stage)}
			/>
			<BackdropLoader open={loading} />
			{props.children}
		</>
	)
}

export default TwoFactor
