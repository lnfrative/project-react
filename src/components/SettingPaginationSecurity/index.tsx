// region import
import React, { useContext } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Modal, Backend } from 'contexts'

// interfaces
import { BackendUser } from 'interfaces'

// components
import { SettingPagination, Button, ModalBoxEnable2FA, BackdropLoader } from 'components'

// utilities
import { message, resources, requestId } from 'utilities'

// modules
import { initialState, enableTwoFactor } from './module'

// styles
import styles from './index.module.css'
// endregion

const enduser = resources.endpoints.get.user

function SettingPaginationSecurity() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const modal = useContext(Modal)

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
							onClick: enableTwoFactor(stage, modal),
							type: 'button',
						}}
						design="simple"
						title={message({ id: 'ENABLE' })}
					/>
				)}
				{user.two_factor_verified && (
					<Button
						buttonHTMLAttributes={{
							type: 'button',
						}}
						design="simple"
						title={message({ id: 'DEACTIVATE' })}
					/>
				)}
				{stage.state.id === modal.state.id && modal.state.status === 'open' && (
					<ModalBoxEnable2FA />
				)}
			</div>
			<BackdropLoader open={updatingUser} />
		</SettingPagination>
	)
}

export default SettingPaginationSecurity
