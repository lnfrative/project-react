// region import
import { useEffect } from 'react'

// interfaces
import { EndScrollParams } from 'interfaces'

// hooks
import { useStage } from 'hooks'

// modules
import { initialState, handleScroll } from './module'
// endregion

function useEndScroll(params: EndScrollParams) {
  const stage = useStage(initialState)

  useEffect(() => {
		window.addEventListener('scroll', handleScroll(params, stage))
		return () => {
			window.removeEventListener('scroll', handleScroll(params, stage))
		}
  }, [stage.state.endScroll])

  return stage.state
}

export default useEndScroll