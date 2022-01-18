import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CardWallet } from 'components'

export default {
	title: 'CardWallet',
	component: CardWallet,
}

const Template: ComponentStory<typeof CardWallet> = () => <CardWallet />

export const Test = Template.bind({})
