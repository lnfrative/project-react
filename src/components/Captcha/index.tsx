// region import
import React, { useContext, useEffect } from 'react'
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
	const captchaKey = backend.response.get({
		endpoint: resources.endpoints.get.captchaKey,
	})?.data

	const params = {
		'g-recaptcha-response': captcha.state['g-recaptcha-response'] ?? '',
	}

	const hash = backend.response.post({
		endpoint: resources.endpoints.post.captchaValidate,
		params,
	})?.data

	const loading =
		backend.loading?.id === requestId('post', resources.endpoints.post.captchaValidate, params)

	useEffect(() => {
		if (hash) {
			captcha.commitState({ hash })
			props.onSuccess()
		}
	}, [hash])

	return (
		<>
			<ReCAPTCHA sitekey={captchaKey} onChange={onChange(backend)} />
			<BackdropLoader open={loading} />
		</>
	)
}

export default Captcha
