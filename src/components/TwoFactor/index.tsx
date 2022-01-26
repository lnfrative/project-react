// region import
import React, { PropsWithChildren, useContext, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Modal } from 'contexts'

// interfaces
import { TwoFactorProps } from 'interfaces'

// components
import { ModalBox2FA } from 'components'

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

	useEffect(() => {
		if (typeof response?.error === 'object' && response.error) {
			if (response.error.second_factor) {
				const id = Math.random()
				stage.commitState({ id })
				modal.commitState({ id, status: 'open' })
			}
		}
	}, [response?.error])

	return (
		<>
			{modal.state.id === stage.state.id && modal.state.status === 'open' && (
				<ModalBox2FA onCode={onCode(props, backend, modal)} />
			)}
			{props.children}
		</>
	)
}

export default TwoFactor
