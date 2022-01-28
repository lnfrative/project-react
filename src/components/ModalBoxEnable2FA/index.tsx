// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend } from 'contexts'

// components
import { ModalBox, BackdropLoader } from 'components'

// utilities
import { message, resources, requestId } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

const endtwofactorqr = resources.endpoints.get.twoFactorQR

function ModalBoxEnable2FA() {
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
		<ModalBox title={message({ id: 'ENABLE_TWO_FACTOR' })}>
			<div className={styles.container}>
				<div className={styles.info}>{message({ id: 'ENABLE_TWO_FACTOR_INFO' })}</div>
				<img
					className={styles.image}
					src={`data:image/svg+xml;utf8,${encodeURIComponent(response?.data)}`}
					alt="QR Code"
				/>
			</div>
		</ModalBox>
	)
}

export default ModalBoxEnable2FA
