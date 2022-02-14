// region import
import React, { useContext } from 'react'

// interfaces
import { BackendUser } from 'interfaces'

// components
import { SVGIconNotifications, MenuOptionsUser } from 'components'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function GroupUserMenu() {
	const { response } = useContext(Backend)
	const user: BackendUser | undefined = response({
		endpoint: resources.endpoints.get.user,
		method: 'get',
	})?.data
	const letter = user?.email.slice(0, 1).toUpperCase() ?? ''
	return (
		<div className={styles.container}>
			<div className={styles.notifications}>
				<SVGIconNotifications />
			</div>
			<div className={styles.menu}>
				<MenuOptionsUser character={letter} />
			</div>
		</div>
	)
}

export default GroupUserMenu
