// region import
import React from 'react'

// components
import { Receive, Send } from 'components'

// styles
import styles from './index.module.css'
// endregion

function SendAndReceive() {
	return (
		<div className={styles.container}>
			<Receive />
			<Send />
		</div>
	)
}

export default SendAndReceive
