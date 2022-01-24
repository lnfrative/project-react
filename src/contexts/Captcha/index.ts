// region import
import { createContext } from 'react'

// interfaces
import { Stage, ContextCaptchaState } from 'interfaces'
// endregion

const captcha = createContext<Stage<ContextCaptchaState>>({
	commitState: () => {},
	state: {},
})

export default captcha
