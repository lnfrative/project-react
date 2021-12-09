// region import
import { createContext } from 'react'

// modules
import { genRequest, genResponse } from '@/components/ProvideContextBackend/module'

// utilities
import { ContextBackend } from '@/utilities/Interfaces'
// endregion

const state = {}
const commitState = () => {}
const stage = { state, commitState }

const Backend = createContext<ContextBackend>({
  request: genRequest(stage),
  response: genResponse(stage),
})

export default Backend
