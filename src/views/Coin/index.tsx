// region import
import React, { useContext, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'

// contexts
import { Coin as ContextCoin } from '@/contexts'

// components
import { HeaderSegmentation, GroupCoinPreview } from '@/components'

// utilities
import { RouteParamsCoin } from '@/utilities/Interfaces'
import { parseNameCoin } from '@/utilities/Parsers'

// styles
import styles from './style.css'
// endregion

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
          <div>Coin info</div>
        )}
      />
      <div>Shadows</div>
    </>
  )
}

export default Coin
