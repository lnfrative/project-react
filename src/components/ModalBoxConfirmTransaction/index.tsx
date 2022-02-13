// region import
import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// contexts
import { Backend } from 'contexts'

// region import
import { ModalBox, Button, BackdropLoader } from 'components'

// styles
import { requestId, resources } from 'utilities'

// styles
import styles from './index.module.css'

// modules
import { confirmTransaction, cancel } from './module'
// endregion

const endconfirmtransaction = resources.endpoints.post.confirmTransaction

function ModalBoxConfirmTransaction() {
	const backend = useContext(Backend)
	const location = useLocation()
	const searchParams = new URLSearchParams(location.search)

	const params = {
		transaction: searchParams.get('transaction') ?? '',
		hash: searchParams.get('hash') ?? '',
	}

	const response = backend.response({
		method: 'post',
		endpoint: endconfirmtransaction,
		params,
	})

	const loading = backend.loading?.id === requestId('post', endconfirmtransaction, params)

	useEffect(() => {
		if (response?.success) {
			window.location.href = '/'
		}
	}, [response?.success])

	return (
		<ModalBox title="Confirm transaction">
			<div className={styles.container}>
				<div className={styles.info}>
					<span>You confirm the transaction:</span> <span>{searchParams.get('hash')}</span>
				</div>
				<div className={styles.buttons}>
					<div className={styles.confirmButton}>
						<Button
							buttonHTMLAttributes={{
								type: 'button',
								onClick: confirmTransaction(backend, params),
							}}
							design="normal"
							title="Confirm"
						/>
					</div>
					<Button
						buttonHTMLAttributes={{
							type: 'button',
							onClick: cancel,
						}}
						design="simple"
						title="Cancel"
					/>
				</div>
			</div>
			<BackdropLoader open={loading} />
		</ModalBox>
	)
}

export default ModalBoxConfirmTransaction
