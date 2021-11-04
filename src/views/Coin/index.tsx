// region import
import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { Coin as ContextCoin } from '@/contexts'

// components
import { HeaderSegmentation } from '@/components'

// utilities
import { RouteParamsCoin } from '@/utilities/Interfaces'
// endregion

function Coin() {
  const contextStage = useContext(ContextCoin)
  const match = useRouteMatch<RouteParamsCoin>()

  useEffect(() => {
    const { nameCoin } = match.params
    contextStage.commitState({ nameCoin })
  }, [match.params.nameCoin])

  return (
    <HeaderSegmentation
      primaryContent={(
        <div>Coin logo</div>
      )}
      secondaryContent={(
        <div>Coin info</div>
      )}
    />
  )
}

export default Coin
