// region import
import React, { useEffect } from 'react'

// hooks
import { useSessionStore } from 'hooks'

// components
import { Receive, Send, BackdropLoader } from 'components'

// utiltiies
import { fetchWallets } from 'utilities/fetcher'

// styles
import styles from './index.module.css'
// endregion

function SendAndReceive() {
	const session = useSessionStore()


	useEffect(() => {
		if (session.user && session.wallets.status !== 'loaded') {
			fetchWallets()
		}
	}, [session.user])

	return (
		<div className={styles.container}>
			<div className={styles.containerReceive}>
				<Receive />
			</div>
			<div className={styles.containerSend}>
				<Send />
			</div>
			<BackdropLoader open={session.wallets.status === 'loading'} />
		</div>
	)
}

export default SendAndReceive
