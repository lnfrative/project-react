// region import
import React, { useEffect, useContext } from 'react'

// hooks
import { useStage } from 'hooks'

// utilities
import { resources } from 'utilities'
import { PaginationObject } from 'interfaces'

// contexts
import { View as ContextView } from 'contexts'

// components
import {
	HeaderSegmentation,
	PaginationMenu,
	SettingPaginationAccount,
	SettingPaginationMisc,
	// SettingPaginationProfile,
	SettingPaginationSecurity,
	Middleware,
} from 'components'

// modules
import { onChangePagination, initialState } from './module'
// endregion

const paginationObjects: Array<PaginationObject> = [
	{
		id: 'account',
		title: 'Account',
		main: true,
		content: <SettingPaginationAccount />,
	},
	// { id: 'public_profile', title: 'Public profile', content: <SettingPaginationProfile /> },
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
		<Middleware requirements={resources.routes.setting.middlewares}>
			<HeaderSegmentation
				primaryContent={
					<PaginationMenu
						onChange={onChangePagination(stage)}
						pathnameBase={resources.routes.setting.base}
						pathParamId={resources.routes.setting.base.slice(1)}
						paginationObjects={paginationObjects}
						title="Account Settings"
					/>
				}
				secondaryContent={stage.state.paginationObjectSelected?.content}
			/>
		</Middleware>
	)
}

export default Account
