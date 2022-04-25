// region import
import { useStoreSelector } from 'hooks'
// endregion

function useApiStore() {
  return useStoreSelector((state) => state.api)
}

export default useApiStore