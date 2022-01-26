// region import
import React from 'react'

// components
import { ModalBox, Input } from 'components'

// interfaces
import { ModalBox2FAProps } from 'interfaces'

// utilities
import { message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function ModalBox2FA(props: ModalBox2FAProps) {
	return (
		<ModalBox title={message({ id: 'TWO_FACTOR_AUTH' })}>
			<div className={styles.container}>
				<div className={styles.otp}>OTP:</div>
				<div className={styles.input}>
					<Input
						InputHTMLAttributes={{
							style: { textAlign: 'center' },
							type: 'text',
						}}
					/>
				</div>
			</div>
		</ModalBox>
	)
}

export default ModalBox2FA
