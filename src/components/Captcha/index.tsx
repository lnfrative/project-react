// region import
import React, { useContext } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

// contexts
import { Backend } from 'contexts'

// utilities
import { resources } from 'utilities'

// modules
import { onChange } from './module'
// endregion

function Captcha() {
  const backend = useContext(Backend)
  const captchaKey = backend.response.get({
    endpoint: resources.endpoints.get.captchaKey
  })?.data

  return (
    <ReCAPTCHA
      sitekey={captchaKey}
      onChange={onChange(backend)}
    />
  )
}

export default Captcha