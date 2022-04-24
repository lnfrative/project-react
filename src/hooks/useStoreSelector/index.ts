import { TypedUseSelectorHook, useSelector } from 'react-redux'
import type { StoreState } from 'stores'

const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector

export default useStoreSelector
