import React from 'react'
import { ComponentStory } from '@storybook/react'
import { PaginationMenuProps } from 'interfaces'
import { PaginationMenu } from 'components'

export default {
	title: 'PaginationMenu',
	component: PaginationMenu,
}

const Template: ComponentStory<typeof PaginationMenu> = (props: PaginationMenuProps) => (
	<PaginationMenu {...props} />
)

export const Test = Template.bind({})

Test.args = {
	title: 'Title',
	pathParamId: '',
	pathnameBase: '',
	paginationObjects: [
		{
			id: 'test',
			title: 'title',
			content: <div style={{ color: 'white' }}>content.</div>,
		},
	],
}
