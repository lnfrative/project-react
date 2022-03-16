// region import
import React, { useContext } from 'react'
import { Tooltip } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend } from 'contexts'

// interfaces
import { BackendUser } from 'interfaces'

// components
import { SettingPagination, Button, BackdropLoader, Enable2FA } from 'components'

// utilities
import { message, resources, requestId } from 'utilities'

// modules
import { initialState, enableTwoFactor, closeEnable2FA } from './module'

// styles
import styles from './index.module.css'
// endregion

const enduser = resources.endpoints.get.user

function SettingPaginationSecurity() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)

	const updatingUser = backend.loading?.id === requestId('get', enduser)

	const user: BackendUser = backend.response({
		endpoint: enduser,
		method: 'get',
	})?.data

	return (
		<SettingPagination title="Security">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'TWO_FACTOR_AUTH' })}</div>
				{!user.two_factor_verified && (
					<Button
						buttonHTMLAttributes={{
							onClick: enableTwoFactor(stage),
							type: 'button',
						}}
						design="simple"
						title={message({ id: 'ENABLE' })}
					/>
				)}
				{!!user.two_factor_verified && (
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
					<Enable2FA
						open
						onClose={closeEnable2FA(stage)}
					/>
				)}
			</div>
			<BackdropLoader open={updatingUser} />
		</SettingPagination>
	)
}

export default SettingPaginationSecurity
