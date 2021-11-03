// region import
import React from 'react'
// import { useRouteMatch } from 'react-router-dom'

// components
import { HeaderCoin } from '@/components'

// utilities
// import { RouteParamsCoin } from '@/utilities/Interfaces'
// endregion

function Coin() {
  // const match = useRouteMatch<RouteParamsCoin>()
  return (
    <HeaderCoin>
      <div>Coin logo</div>
      <div>Coin info</div>
    </HeaderCoin>
  )
}

export default Coin
