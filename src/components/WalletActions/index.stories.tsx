import React from 'react'
import { ComponentStory } from '@storybook/react'
import { WalletActions } from 'components'

export default {
	title: 'WalletActions',
	component: WalletActions,
}

const Template: ComponentStory<typeof WalletActions> = () => <WalletActions />

export const Test = Template.bind({})
