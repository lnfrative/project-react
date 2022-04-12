// region import
import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// contexts
import { Backend } from 'contexts'

// interfaces
import { DialogNotificationConfirmTransactionProps } from 'interfaces'

// region import
import { Button, BackdropLoader, DialogNotification } from 'components'

// styles
import { requestId, resources, message } from 'utilities'

// styles
import styles from './index.module.css'

// modules
import { confirmTransaction, cancel } from './module'
// endregion

const endconfirmtransaction = resources.endpoints.post.confirmTransaction

function DialogNotificationConfirmTransaction(props: DialogNotificationConfirmTransactionProps) {
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
		<>	
			<DialogNotification
				open={props.open}
				title={message({ id: 'CONFIRM_TRANSACTION' })}
				message={message({ id: 'CONFIRM_TRANSACTION_REQUIRED' })}
				ContentAfterMessage={
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
				}
			/>
			<BackdropLoader open={loading} />
		</>
	)
}

export default DialogNotificationConfirmTransaction
