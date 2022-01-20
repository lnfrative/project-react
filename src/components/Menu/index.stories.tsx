import React from 'react'
import { ComponentStory } from '@storybook/react'
import { MenuProps } from 'interfaces'
import { Menu } from 'components'

export default {
	title: 'Menu',
	component: Menu,
}

const Template: ComponentStory<typeof Menu> = (props: MenuProps) => <Menu {...props} />

export const Test = Template.bind({})

Test.args = {
	children: <div style={{ color: 'white' }}>Children.</div>,
	content: <div style={{ color: 'white' }}>Content.</div>,
}
