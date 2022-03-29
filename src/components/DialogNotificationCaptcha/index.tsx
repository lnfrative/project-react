// region import
import React from 'react'

// interfaces
import { DialogNotificationCaptchaProps } from 'interfaces'

// utilities
import { message } from 'utilities'

// components
import { Captcha, DialogNotification } from 'components'

// styles
import styles from './index.module.css'
// endregion

function DialogNotificationCaptcha(props: DialogNotificationCaptchaProps) {
	return (
		<DialogNotification
			open={props.open}
			title={message({ id: 'CAPTCHA_VERIFICATION' })}
			message={message({ id: 'VERIFY_CAPTCHA_MESSAGE' })}
			onClose={props.onClose}
			ContentAfterMessage={
				<div className={styles.captcha}>
					<Captcha onSuccess={props.onSuccess} />
				</div>
			}
		/>
	)
}

export default DialogNotificationCaptcha
