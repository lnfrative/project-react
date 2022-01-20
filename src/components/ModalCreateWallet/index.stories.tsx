import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ModalCreateWallet } from 'components'

export default {
	title: 'ModalCreateWallet',
	component: ModalCreateWallet,
}

const Template: ComponentStory<typeof ModalCreateWallet> = () => <ModalCreateWallet />

export const Test = Template.bind({})
