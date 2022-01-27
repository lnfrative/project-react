// region import
import { createContext } from 'react'

// modules
import { requester, responser } from 'components/ProvideContextBackend/module'

// utilities
import { ContextBackend } from 'interfaces'
// endregion

const state = {}
const commitState = () => {}
const stage = { state, commitState }

const Backend = createContext<ContextBackend>({
	request: requester(stage),
	response: responser(stage),
})

export default Backend
