// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend } from 'contexts'

// components
import { Receive, Send, BackdropLoader } from 'components'

// utiltiies
import { requestId, resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function SendAndReceive() {
	const backend = useContext(Backend)
	const loading = backend.loading?.id === requestId('get', resources.endpoints.get.wallets)

	useEffect(() => {
		backend.request({
			method: 'get',
			endpoint: resources.endpoints.get.wallets,
		})
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.containerReceive}>
				<Receive />
			</div>
			<div className={styles.containerSend}>
				<Send />
			</div>
			<BackdropLoader open={loading} />
		</div>
	)
}

export default SendAndReceive
