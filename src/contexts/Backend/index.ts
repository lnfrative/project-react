// region import
import { createContext } from 'react'

// modules
import { genRequest, responser } from 'components/ProvideContextBackend/module'

// utilities
import { ContextBackend } from 'interfaces'
// endregion

const state = {}
const commitState = () => {}
const stage = { state, commitState }

const Backend = createContext<ContextBackend>({
	request: genRequest(stage),
	response: responser(stage),
})

export default Backend
