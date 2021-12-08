// region import
import { createContext } from 'react'
// endregion

const Backend = createContext<{ response: object, request: object }>({
  request: {},
  response: {},
})

export default Backend
