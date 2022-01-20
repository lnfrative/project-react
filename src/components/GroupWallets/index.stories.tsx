import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupWallets } from 'components'

export default {
	title: 'GroupWallets',
	component: GroupWallets,
}

const Template: ComponentStory<typeof GroupWallets> = () => <GroupWallets />

export const Test = Template.bind({})
