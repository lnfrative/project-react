// region import
import React, { PropsWithChildren } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Captcha } from 'contexts'

// modules
import { initialState } from './module'
// endregion

function ProvideContextCaptcha(props: PropsWithChildren<{}>) {
	const stage = useStage(initialState)
	return <Captcha.Provider value={stage}>{props.children}</Captcha.Provider>
}

export default ProvideContextCaptcha
