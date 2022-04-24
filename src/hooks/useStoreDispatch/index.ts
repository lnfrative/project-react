import { useDispatch } from 'react-redux'
import type { StoreDispatch } from 'stores'

const useStoreDispatch = () => useDispatch<StoreDispatch>()

export default useStoreDispatch
