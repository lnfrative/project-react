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
  GroupUserMenu,
  LinkBackDashboard,
} from '@/components'

// utilities
import { message } from '@/utilities'
import { HeaderSegmentationProps } from '@/utilities/Interfaces'

// modules
import { nestStyles } from './module'
// endregion

function HeaderSegmentation(props: HeaderSegmentationProps) {
  const contextStage = useContext(Coin)
  const styles = nestStyles()
  return (
    <Header
      contentHeader={(
        <div className={styles.grid}>
          <div className={styles.groupNav}>
            <GroupBrand />
            <SVGIconDashboard />
            <SVGIconGroups />
          </div>
          <div className={styles.groupNavDetails}>
            <div className={styles.groupTitleView}>
              <div className={styles.seeing}>{message({ id: 'SEEING' })}</div>
              <div className={styles.title}>{contextStage.state.name}</div>
            </div>
            <GroupUserMenu />
          </div>
        </div>
      )}
    >
      <div className={styles.grid}>
        <LinkBackDashboard />
      </div>
      <div className={styles.grid}>
        {props.primaryContent}
        {props.secondaryContent}
      </div>
    </Header>
  )
}

export default HeaderSegmentation
