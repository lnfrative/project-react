// region import
import { useStoreSelector } from 'hooks'
// endregion

function useSessionStore() {
  return useStoreSelector((state) => state.session)
}

export default useSessionStore