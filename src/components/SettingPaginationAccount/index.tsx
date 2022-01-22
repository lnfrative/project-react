// region import
import React, { useContext } from 'react'
import { Tooltip } from '@mui/material'

// components
import { SettingPagination, Button, FormUpdatePassword } from 'components'

// interfaces
import { BackendUser } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// utilities
import { message, resources } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function SettingPaginationAccount() {
	const { response } = useContext(Backend)
	const user: BackendUser | undefined = response.get({
		endpoint: resources.endpoints.get.user,
	})?.data
	return (
		<SettingPagination title="Account">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'CHANGE_EMAIL' })}</div>
				<div className={styles.groupEmail}>
					<div className={styles.email}>{user?.email}</div>
					<Tooltip title={message({ id: 'DISABE_EMAIL_CHANGE' })}>
						<div>
							<Button
								buttonHTMLAttributes={{
									type: 'button',
								}}
								design="simple"
								title="Change email"
							/>
						</div>
					</Tooltip>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'CHANGE_PASSWORD' })}</div>
				<FormUpdatePassword />
			</div>
		</SettingPagination>
	)
}

export default SettingPaginationAccount
