import React from 'react'
import { ComponentStory } from '@storybook/react'
import { PaginationBarProps } from 'interfaces'
import { PaginationBar } from 'components'

export default {
	title: 'PaginationBar',
	component: PaginationBar,
}

const Template: ComponentStory<typeof PaginationBar> = (props: PaginationBarProps) => (
	<PaginationBar {...props} />
)

export const Test = Template.bind({})

Test.args = {
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
