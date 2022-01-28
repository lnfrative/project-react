// region import
import React, { useContext, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Modal } from 'contexts'

// components
import { Input, BackdropLoader } from 'components'

// utilities
import { message, resources, requestId } from 'utilities'

// modules
import { onChange, initialState } from './module'

// styles
import styles from './index.module.css'
// endregion

const endenable2fa = resources.endpoints.post.secondFactorEnable

function EnableTwoFactor() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const modal = useContext(Modal)

	const params = {
		second_factor: stage.state.code ?? '',
	}

	const loading = backend.loading?.id === requestId('post', endenable2fa, params)

	const response = backend.response({
		endpoint: endenable2fa,
		params,
		method: 'post',
	})

	useEffect(() => {
		if (stage.state.code) {
			backend.request({
				endpoint: endenable2fa,
				params,
				method: 'post',
			})
		}
	}, [stage.state.code])

	useEffect(() => {
		if (response?.success) {
			backend.request({ endpoint: resources.endpoints.get.user, method: 'get' })
			modal.commitState({ id: undefined, status: 'close' })
		}
	}, [response?.success])

	return (
		<div className={styles.container}>
			<div className={styles.label}>{message({ id: 'ENTER_OTP' })}</div>
			<div className={styles.input}>
				<Input
					InputHTMLAttributes={{
						type: 'text',
						style: { textAlign: 'center' },
						onChange: onChange(stage),
					}}
				/>
			</div>
			<BackdropLoader open={loading} />
		</div>
	)
}

export default EnableTwoFactor
