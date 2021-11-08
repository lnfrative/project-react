// region import
import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { Coin as ContextCoin } from '@/contexts'

// components
import {
  HeaderSegmentation,
  GroupCoinPreview,
  GroupCoinValues,
  PaginationBar,
  CardCoinOverview,
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
    id: 'overview', title: 'Overview', main: true, content: <CardCoinOverview />,
  },
  { id: 'giftcard_and_utilities', title: 'Giftcard & utilities', content: <div>Giftcard</div> },
  { id: 'movement_history', title: 'Movement history', content: <div>Movement</div> },
  { id: 'about', title: 'About', content: <div>About</div> },
]

function Coin() {
  const contextStage = useContext(ContextCoin)
  const match = useRouteMatch<RouteParamsCoin>()

  useEffect(() => {
    // const { nameCoin } = match.params
    // TOOD: handle nameCoin fetching
    contextStage.commitState(parseNameCoin('dogecash'))
  }, [match.params.nameCoin])

  return (
    <>
      <HeaderSegmentation
        primaryContent={(
          !!contextStage.state.id
          && !!contextStage.state.logo
          && !!contextStage.state.name
          && (
            <div className={styles.primaryContent}>
              <GroupCoinPreview
                nameCoin={contextStage.state.name}
                idCoin={contextStage.state.id}
                srcImgCoin={contextStage.state.logo}
              />
              <div className={styles.primaryContentCard} />
            </div>
          )
        )}
        secondaryContent={(
          <div className={styles.secondaryContent}>
            <GroupCoinValues />
            {!!contextStage.state.key && (
              <PaginationBar
                pathnameBase={`${resources.path.coin}/${contextStage.state.key}`}
                pathParamId={contextStage.state.key}
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
