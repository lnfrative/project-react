// region import
import React from 'react'

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
            Coin name.
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
