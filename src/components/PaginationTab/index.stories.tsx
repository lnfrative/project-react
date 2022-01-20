import React from 'react'
import { ComponentStory } from '@storybook/react'
import { PaginationTabProps } from 'interfaces'
import { PaginationTab } from 'components'

export default {
	title: 'PaginationTab',
	component: PaginationTab,
}

const Template: ComponentStory<typeof PaginationTab> = (props: PaginationTabProps) => (
	<PaginationTab {...props} />
)

export const Test = Template.bind({})

Test.args = {
	pathname: '',
	pathnameBase: '',
	paginationObject: {
		id: 'test',
		title: 'title',
		content: <div style={{ color: 'white' }}>content.</div>,
	},
}
