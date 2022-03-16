// region import
import React, { useContext, useEffect } from 'react'

// interfaces
import { Enable2FAProps } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// components
import { BackdropLoader, EnableTwoFactor, DialogNotification } from 'components'

// utilities
import { resources, requestId } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

const endtwofactorqr = resources.endpoints.get.twoFactorQR

function Enable2FA(props: Enable2FAProps) {
	const backend = useContext(Backend)
	const id = requestId('get', endtwofactorqr)
	const response = backend.response({ id })
	const loading = backend.loading?.id === id

	useEffect(() => {
		if (!response?.success) {
			backend.request({
				endpoint: resources.endpoints.get.twoFactorQR,
				method: 'get',
			})
		}
	}, [response?.success])

	if (loading || !response) return <BackdropLoader open />
	return (
		<DialogNotification
			title="2FA Authentication"
			message="Scan this code with your 2FA app."
			Content={(
				<img
					className={styles.image}
					src={`data:image/svg+xml;utf8,${encodeURIComponent(response?.data)}`}
					alt="QR Code"
				/>
			)}
			ContentAfterMessage={(
				<div className={styles.enable}>
					<EnableTwoFactor onClose={props.onClose} />
				</div>
			)}
			open={props.open}
			onClose={props.onClose}
		/>
	)
}

export default Enable2FA
