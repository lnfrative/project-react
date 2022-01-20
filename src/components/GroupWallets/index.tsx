// region import
import React from 'react'

// components
import { CardWallet } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupWallets() {
	return (
		<div className={styles.container}>
			<div className={styles.cardWallet}>
				<CardWallet />
			</div>
			<div className={styles.cardWallet}>
				<CardWallet />
			</div>
			<div className={styles.cardWallet}>
				<CardWallet />
			</div>
			<div className={styles.cardWallet}>
				<CardWallet />
			</div>
			<div className={styles.cardWallet}>
				<CardWallet />
			</div>
		</div>
	)
}

export default GroupWallets
