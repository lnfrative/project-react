// region import
import { useStoreSelector } from 'hooks'
// endregion

function useCaptchaStore() {
  return useStoreSelector((state) => state.captcha)
}

export default useCaptchaStore