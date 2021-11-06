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
} from '@/components'

// utilities
import { RouteParamsCoin, PaginationObject } from '@/utilities/Interfaces'
import { parseNameCoin } from '@/utilities/Parsers'

// styles
import styles from './style.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
  { id: 'overview', title: 'Overview', main: true, content: <div>Hellow word!</div> },
  { id: 'giftcard_and_utilities', title: 'Giftcard & utilities', content: <div>Hellow word!</div> },
  { id: 'movement_history', title: 'Movement history', content: <div>Hellow word!</div> },
  { id: 'about', title: 'About', content: <div>Hellow word!</div> },
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
