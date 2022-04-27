// region import
import React from 'react'
import { Tooltip } from '@mui/material'

// hooks
import { useStage, useSessionStore } from 'hooks'

// components
import { SettingPagination, Button, BackdropLoader, DialogNotificationEnable2FA } from 'components'

// utilities
import { message } from 'utilities'

// modules
import { initialState, enableTwoFactor, closeEnable2FA } from './module'

// styles
import styles from './index.module.css'
// endregion

function SettingPaginationSecurity() {
	const session = useSessionStore()
	const stage = useStage(initialState)

	return (
		<SettingPagination title="Security">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'TWO_FACTOR_AUTH' })}</div>
				{!session.user.data?.two_factor_verified && (
					<Button
						buttonHTMLAttributes={{
							onClick: enableTwoFactor(stage),
							type: 'button',
						}}
						design="simple"
						title={message({ id: 'ENABLE' })}
					/>
				)}
				{!!session.user.data?.two_factor_verified && (
					<div className={styles.containerButton}>
						<Tooltip title={message({ id: 'DEACTIVATE_TWO_FACTOR' })}>
							<div>
								<Button
									buttonHTMLAttributes={{
										type: 'button',
									}}
									design="simple"
									title={message({ id: 'DEACTIVATE' })}
								/>
							</div>
						</Tooltip>
					</div>
				)}
				{stage.state.enable2FA && (
					<DialogNotificationEnable2FA
						open
						onClose={closeEnable2FA(stage)}
					/>
				)}
			</div>
			<BackdropLoader open={session.user.status === 'loading'} />
		</SettingPagination>
	)
}

export default SettingPaginationSecurity
