// region import
import React, { useContext } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Modal } from 'contexts'

// components
import { SettingPagination, Button, ModalBoxEnable2FA } from 'components'

// utilities
import { message } from 'utilities'

// modules
import { initialState, enableTwoFactor } from './module'

// styles
import styles from './index.module.css'
// endregion

function SettingPaginationSecurity() {
	const stage = useStage(initialState)
	const modal = useContext(Modal)

	return (
		<SettingPagination title="Security">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'TWO_FACTOR_AUTH' })}</div>
				<Button
					buttonHTMLAttributes={{
						onClick: enableTwoFactor(stage, modal),
						type: 'button',
					}}
					design="simple"
					title={message({ id: 'ENABLE' })}
				/>
				{stage.state.id === modal.state.id && modal.state.status === 'open' && (
					<ModalBoxEnable2FA />
				)}
			</div>
		</SettingPagination>
	)
}

export default SettingPaginationSecurity
