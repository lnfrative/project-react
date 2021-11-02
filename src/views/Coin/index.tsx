// region import
import React from 'react'
import { useRouteMatch } from 'react-router-dom'

// utilities
import { RouteParamsCoin } from '@/utilities/Interfaces'
// endregion

function Coin() {
  const match = useRouteMatch<RouteParamsCoin>()
  return (
    <div>
      {match.params.nameCoin}
    </div>
  )
}

export default Coin
