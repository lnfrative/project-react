import React from 'react'
import { ComponentStory } from '@storybook/react'
import { PaginationMenuTabProps } from 'interfaces'
import { PaginationMenuTab } from 'components'

export default {
	title: 'PaginationMenuTab',
	component: PaginationMenuTab,
}

const Template: ComponentStory<typeof PaginationMenuTab> = (props: PaginationMenuTabProps) => (
	<PaginationMenuTab {...props} />
)

export const Test = Template.bind({})

Test.args = {
	pathnameBase: '',
	pathname: '',
	paginationObject: {
		id: 'test',
		title: 'title',
		content: <div style={{ color: 'white' }}>content.</div>,
	},
}
