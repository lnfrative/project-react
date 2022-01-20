// region import
import React from 'react'

// components
import { SVGIconNotifications, MenuOptionsUser } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupUserMenu() {
	return (
		<div className={styles.container}>
			<SVGIconNotifications />
			<div className={styles.menu}>
				<MenuOptionsUser character="W" />
			</div>
		</div>
	)
}

export default GroupUserMenu
