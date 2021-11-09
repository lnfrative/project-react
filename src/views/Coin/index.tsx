// region import
import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { View as ContextView, Coin as ContextCoin } from '@/contexts'

// components
import {
  HeaderSegmentation,
  GroupCoinPreview,
  GroupCoinValues,
  PaginationBar,
  CoinPaginationOverview,
} from '@/components'

// utilities
import { RouteParamsCoin, PaginationObject } from '@/utilities/Interfaces'
import { parseNameCoin } from '@/utilities/Parsers'
import { resources } from '@/utilities'

// styles
import styles from './style.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
  {
    id: 'overview', title: 'Overview', main: true, content: <CoinPaginationOverview />,
  },
  { id: 'giftcard_and_utilities', title: 'Giftcard & utilities', content: <div>Giftcard</div> },
  { id: 'movement_history', title: 'Movement history', content: <div>Movement</div> },
  { id: 'about', title: 'About', content: <div>About</div> },
]

function Coin() {
  const coinContextStage = useContext(ContextCoin)
  const viewContextStage = useContext(ContextView)
  const match = useRouteMatch<RouteParamsCoin>()

  useEffect(() => {
    // const { nameCoin } = match.params
    // TOOD: handle nameCoin fetching
    const resourceCoinData = parseNameCoin('dogecash')
    coinContextStage.commitState(resourceCoinData)
    viewContextStage.commitState({
      name: resourceCoinData.name,
    })
  }, [match.params.nameCoin])

  return (
    <>
      <HeaderSegmentation
        primaryContent={(
          !!coinContextStage.state.id
          && !!coinContextStage.state.logo
          && !!coinContextStage.state.name
          && (
            <div className={styles.primaryContent}>
              <GroupCoinPreview
                nameCoin={coinContextStage.state.name}
                idCoin={coinContextStage.state.id}
                srcImgCoin={coinContextStage.state.logo}
              />
            </div>
          )
        )}
        secondaryContent={(
          <div className={styles.secondaryContent}>
            <GroupCoinValues />
            {!!coinContextStage.state.key && (
              <PaginationBar
                pathnameBase={`${resources.path.coin}/${coinContextStage.state.key}`}
                pathParamId={coinContextStage.state.key}
                paginationObjects={paginationObjects}
              />
            )}
          </div>
        )}
      />
    </>
  )
}

export default Coin
