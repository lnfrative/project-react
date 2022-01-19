import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupPagesDashboard } from 'components'

export default {
	title: 'GroupPagesDashboard',
	component: GroupPagesDashboard,
}

const Template: ComponentStory<typeof GroupPagesDashboard> = () => <GroupPagesDashboard />

export const Test = Template.bind({})
