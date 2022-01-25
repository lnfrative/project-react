// region import
import React from 'react'

// interfaces
import { ModalBoxCaptchaProps } from 'interfaces'

// utilities
import { message } from 'utilities'

// components
import { ModalBox, Captcha } from 'components'

// styles
import styles from './index.module.css'
// endregion

function ModalBoxCaptcha(props: ModalBoxCaptchaProps) {
	return (
		<ModalBox title={message({ id: 'CAPTCHA_VERIFICTION' })}>
			<div className={styles.captcha}>
				<Captcha onSuccess={props.onSuccess} />
			</div>
		</ModalBox>
	)
}

export default ModalBoxCaptcha
