import React from 'react'
import { ComponentStory } from '@storybook/react'
import { HeaderDashboardProps } from 'interfaces'
import { HeaderDashboard } from 'components'

export default {
	title: 'HeaderDashboard',
	component: HeaderDashboard,
}

const Template: ComponentStory<typeof HeaderDashboard> = (props: HeaderDashboardProps) => (
	<HeaderDashboard {...props} />
)

export const Test = Template.bind({})

Test.args = {
	children: <div style={{ color: 'white' }}>Children.</div>,
}
