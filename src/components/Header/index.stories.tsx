import React from 'react'
import { ComponentStory } from '@storybook/react'
import { HeaderProps } from 'interfaces'
import { Header } from 'components'

export default {
	title: 'Header',
	component: Header,
}

const Template: ComponentStory<typeof Header> = (props: HeaderProps) => (
	<Header {...props}>
		<div style={{ color: 'white' }}>Children.</div>
	</Header>
)

export const Test = Template.bind({})

Test.args = {
	contentHeader: <div style={{ color: 'white' }}>Content Header.</div>,
}
