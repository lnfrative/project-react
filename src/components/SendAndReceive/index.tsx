// region import
import React from 'react'

// components
import { Receive } from 'components'

// styles
import styles from './index.module.css'
// endregion

function SendAndReceive() {
	return (
		<div className={styles.container}>
			<Receive />
			<div className={styles.secundaryGroup}>
				<div className={styles.group}>
					<div className={styles.groupTitle}>Send</div>
					<div className={styles.groupValues}>values</div>
				</div>
			</div>
		</div>
	)
}

export default SendAndReceive
