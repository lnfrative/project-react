// region import
import React, { useContext, useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

// interfaces
import { CaptchaProps } from 'interfaces'

// components
import { BackdropLoader } from 'components'

// contexts
import { Backend, Captcha as ContextCaptcha } from 'contexts'

// utilities
import { resources, requestId } from 'utilities'

// modules
import { onChange } from './module'
// endregion

function Captcha(props: CaptchaProps) {
	const backend = useContext(Backend)
	const captcha = useContext(ContextCaptcha)
	const ref = useRef<ReCAPTCHA>(null)
	const captchaKey = backend.response.get({
		endpoint: resources.endpoints.get.captchaKey,
	})?.data

	const params = {
		'g-recaptcha-response': captcha.state['g-recaptcha-response'] ?? '',
	}

	const captchaValidate = backend.response.post({
		endpoint: resources.endpoints.post.captchaValidate,
		params,
	})

	const loading =
		backend.loading?.id === requestId('post', resources.endpoints.post.captchaValidate, params)

	useEffect(() => {
		if (captchaValidate?.success) {
			captcha.commitState({ hash: captchaValidate.data })
			props.onSuccess(captchaValidate.data)
		}
		if (captchaValidate?.error && ref.current) {
			ref.current.reset()
		}
	}, [captchaValidate?.success])

	return (
		<>
			<ReCAPTCHA ref={ref} sitekey={captchaKey} onChange={onChange(backend, captcha)} />
			<BackdropLoader open={loading} />
		</>
	)
}

export default Captcha
