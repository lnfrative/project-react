// region import
import React, { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

// interfaces
import { CaptchaProps } from 'interfaces'

// hooks
import { useApiStore, useCaptchaStore } from 'hooks'

// utilities
import { fetchCaptchaValidate } from 'utilities/fetcher'

// components
import { BackdropLoader } from 'components'

// modules
import { onChange } from './module'
// endregion

function Captcha(props: CaptchaProps) {
	const api = useApiStore()
	const captcha = useCaptchaStore()
	const ref = useRef<ReCAPTCHA>(null)

	useEffect(() => {
		if (captcha.token) {
			fetchCaptchaValidate()
		}
	}, [captcha.token])

	useEffect(() => {
		if (api.captchaValidate.data) {
			props.onSuccess(api.captchaValidate.data)
		}
	}, [api.captchaValidate.status])

	return (
		<>
			<ReCAPTCHA theme="dark" ref={ref} sitekey={api.captchaKey} onChange={onChange} />
			<BackdropLoader open={api.captchaValidate.status === 'loading'} />
		</>
	)
}

export default Captcha
