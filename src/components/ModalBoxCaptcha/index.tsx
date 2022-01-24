// region import
import React from 'react'

// interfaces
import { ModalBoxCaptchaProps } from 'interfaces'

// utilities
import { message } from 'utilities'

// components
import { ModalBox, Captcha } from 'components'
// endregion

function ModalBoxCaptcha(props: ModalBoxCaptchaProps) {
	return (
		<ModalBox title={message({ id: 'CAPTCHA_VERIFICTION' })}>
			<Captcha onSuccess={props.onSuccess} />
		</ModalBox>
	)
}

export default ModalBoxCaptcha
