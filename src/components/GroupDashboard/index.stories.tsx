import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupDashboardProps } from 'interfaces'
import { GroupDashboard } from 'components'

export default {
	title: 'GroupDashboard',
	component: GroupDashboard,
}

const Template: ComponentStory<typeof GroupDashboard> = (props: GroupDashboardProps) => (
	<GroupDashboard {...props}>
		<div>Children.</div>
	</GroupDashboard>
)

export const Test = Template.bind({})

Test.args = {
	afterTitle: <div>After title</div>,
	title: 'Title',
}
