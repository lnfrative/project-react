// region import
import React, { useContext } from 'react'

// contexts
import { Coin } from '@/contexts'

// components
import {
  Header,
  GroupBrand,
  SVGIconDashboard,
  SVGIconGroups,
} from '@/components'

// utilities
import { HeaderCoinProps } from '@/utilities/Interfaces'

// modules
import { nestStyles } from './module'
// endregion

function HeaderCoin(props: HeaderCoinProps) {
  const contextStage = useContext(Coin)
  const styles = nestStyles()
  return (
    <Header
      contentHeader={(
        <div className={styles.containerHeader}>
          <div className={styles.groupNav}>
            <GroupBrand />
            <SVGIconDashboard />
            <SVGIconGroups />
          </div>
          <div>
            {contextStage.state.nameCoin}
          </div>
        </div>
      )}
    >
      <div className={styles.containerPage}>
        {props.children}
      </div>
    </Header>
  )
}

export default HeaderCoin
