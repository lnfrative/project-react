import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupUserMenu } from 'components'

export default {
	title: 'GroupUserMenu',
	component: GroupUserMenu,
}

const Template: ComponentStory<typeof GroupUserMenu> = () => <GroupUserMenu />

export const Test = Template.bind({})
