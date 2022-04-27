// region import
import React from 'react'
import { Tooltip } from '@mui/material'

// components
import { SettingPagination, Button, FormUpdatePassword } from 'components'

// hooks
import { useSessionStore } from 'hooks'

// utilities
import { message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function SettingPaginationAccount() {
	const session = useSessionStore()
	return (
		<SettingPagination title="Account">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'CHANGE_EMAIL' })}</div>
				<div className={styles.groupEmail}>
					<div className={styles.email}>{session.user.data?.email}</div>
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
