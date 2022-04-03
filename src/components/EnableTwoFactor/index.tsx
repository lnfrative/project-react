// region import
import React, { useContext, useEffect } from 'react'

// interfaces
import { EnableTwoFactorProps } from 'interfaces'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend } from 'contexts'

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

function EnableTwoFactor(props: EnableTwoFactorProps) {
	const stage = useStage(initialState)
	const backend = useContext(Backend)

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
			backend.request({ endpoint: resources.endpoints.get.user, method: 'get', updateCache: true })
			props.onClose()
		}
	}, [response?.success])

	return (
		<div className={styles.container}>
			<div className={styles.label}>{message({ id: 'ENTER_OTP' })}</div>
			<Input
				attributes={{
					autoFocus: true,
					type: 'text',
					style: { textAlign: 'center', padding: 0 },
					onChange: onChange(stage),
				}}
			/>
			<BackdropLoader open={loading} />
		</div>
	)
}

export default EnableTwoFactor
