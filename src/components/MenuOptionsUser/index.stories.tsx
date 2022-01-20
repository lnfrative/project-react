import React from 'react'
import { ComponentStory } from '@storybook/react'
import { MenuOptionsUserProps } from 'interfaces'
import { MenuOptionsUser } from 'components'

export default {
	title: 'MenuOptionsUser',
	component: MenuOptionsUser,
}

const Template: ComponentStory<typeof MenuOptionsUser> = (props: MenuOptionsUserProps) => (
	<MenuOptionsUser {...props} />
)

export const Test = Template.bind({})

Test.args = {
	character: 'W',
}
