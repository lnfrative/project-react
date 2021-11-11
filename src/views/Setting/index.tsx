// region import
import React, { useEffect, useContext } from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { resources } from '@/utilities'
import { PaginationObject } from '@/utilities/Interfaces'

// contexts
import { View as ContextView } from '@/contexts'

// components
import { HeaderSegmentation, PaginationMenu } from '@/components'

// modules
import { onChangePagination, initialState } from './module'

// styles
import styles from './style.css'
// endregion

const paginationObjects: Array<PaginationObject> = [
  {
    id: 'account', title: 'Account', main: true, content: <div>Account</div>,
  },
  { id: 'public_profile', title: 'Public profile', content: <div>Public profile</div> },
  { id: 'security', title: 'Security', content: <div>Security</div> },
  { id: 'misc', title: 'Misc', content: <div>Misc</div> },
]

function Account() {
  const stage = useCommitState(initialState)
  const contextStage = useContext(ContextView)

  useEffect(() => {
    contextStage.commitState({ name: 'Account Settings' })
  }, [])

  return (
    <HeaderSegmentation
      primaryContent={(
        <PaginationMenu
          onChange={onChangePagination(stage)}
          pathnameBase={resources.path.setting}
          pathParamId={resources.path.setting.slice(1)}
          paginationObjects={paginationObjects}
          title="Account Settings"
        />
      )}
      secondaryContent={(
        <div className={styles.secondaryContent}>
          {stage.state.paginationObjectSelected?.content}
        </div>
      )}
    />
  )
}

export default Account
