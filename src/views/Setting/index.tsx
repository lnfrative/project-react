// region import
import React, { useEffect, useContext } from 'react'

// hooks
import { useStage } from '@/hooks'

// utilities
import { resources } from '@/utilities'
import { PaginationObject } from '@/utilities/Interfaces'

// contexts
import { View as ContextView } from '@/contexts'

// components
import {
  HeaderSegmentation,
  PaginationMenu,
  SettingPaginationAccount,
  SettingPaginationMisc,
  SettingPaginationProfile,
  SettingPaginationSecurity,
} from '@/components'

// modules
import { onChangePagination, initialState } from './module'
// endregion

const paginationObjects: Array<PaginationObject> = [
  {
    id: 'account', title: 'Account', main: true, content: <SettingPaginationAccount />,
  },
  { id: 'public_profile', title: 'Public profile', content: <SettingPaginationProfile /> },
  { id: 'security', title: 'Security', content: <SettingPaginationSecurity /> },
  { id: 'misc', title: 'Misc', content: <SettingPaginationMisc /> },
]

function Account() {
  const stage = useStage(initialState)
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
      secondaryContent={stage.state.paginationObjectSelected?.content}
    />
  )
}

export default Account
