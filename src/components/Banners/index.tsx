// region import
import React from 'react'

// hooks
import { useSessionStore } from 'hooks'

// components
import { BannerConfirmEmail } from 'components'

// styles
import styles from './index.module.css'
// endregion

function Banners() {
	const session = useSessionStore()
	return (
		<div className={styles.container}>
			{session.user.data && !session.user.data.email_verified_at && <BannerConfirmEmail />}
		</div>
	)
}

export default Banners
