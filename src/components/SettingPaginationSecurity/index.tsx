// region import
import React from 'react'

// components
import { SettingPagination, Button } from 'components'

// utilities
import { message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function SettingPaginationSecurity() {
	return (
		<SettingPagination title="Security">
			<div className={styles.container}>
				<div className={styles.label}>{message({ id: 'TWO_FACTOR_AUTH' })}</div>
				<Button
					buttonHTMLAttributes={{
						type: 'button',
					}}
					design="simple"
					title={message({ id: 'ENABLE' })}
				/>
			</div>
		</SettingPagination>
	)
}

export default SettingPaginationSecurity
