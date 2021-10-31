// region import
import {
  DependencyList, EffectCallback, useEffect, useState,
} from 'react'
// endregion

function useStrictEffect(effect: EffectCallback, deps?: DependencyList | undefined) {
  const [init, setInit] = useState(true)
  useEffect(() => {
    if (init) return setInit(false)
    return effect()
  }, deps)
}

export default useStrictEffect
