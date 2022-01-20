import React from 'react'
import { ComponentStory } from '@storybook/react'
import { LinkBackDashboard } from 'components'

export default {
	title: 'LinkBackDashboard',
	component: LinkBackDashboard,
}

const Template: ComponentStory<typeof LinkBackDashboard> = () => <LinkBackDashboard />

export const Test = Template.bind({})
