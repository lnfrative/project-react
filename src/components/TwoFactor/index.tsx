// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Modal } from 'contexts'

// interfaces
import { TwoFactorProps } from 'interfaces'

// components
import { ModalBox2FA, BackdropLoader } from 'components'

// utilities
import { requestId } from 'utilities'

// modules
import { initialState, onCode } from './module'
// endregion

function TwoFactor(props: PropsWithChildren<TwoFactorProps>) {
	const backend = useContext(Backend)
	const modal = useContext(Modal)
	const stage = useStage(initialState)
	const response = backend.response({
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
				const id = Math.random()
				stage.commitState({ id })
				modal.commitState({ id, status: 'open' })
			}
		}
	}, [response?.error])

	useEffect(() => {
		if (responseWithSecondFactor?.success) {
			stage.commitState({
				code: undefined,
			})
		}
	}, [responseWithSecondFactor?.success])

	return (
		<>
			{modal.state.id === stage.state.id && modal.state.status === 'open' && (
				<ModalBox2FA onCode={onCode(stage, modal)} />
			)}
			<BackdropLoader open={loading} />
			{props.children}
		</>
	)
}

export default TwoFactor
