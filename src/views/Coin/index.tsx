// region import
import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { Coin as ContextCoin } from '@/contexts'

// components
import { HeaderCoin } from '@/components'

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
    <HeaderCoin>
      <div>Coin logo</div>
      <div>Coin info</div>
    </HeaderCoin>
  )
}

export default Coin
