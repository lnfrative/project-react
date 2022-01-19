import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupDashboardWallets } from 'components'

export default {
	title: 'GroupDashboardWallets',
	component: GroupDashboardWallets,
}

const Template: ComponentStory<typeof GroupDashboardWallets> = () => <GroupDashboardWallets />

export const Test = Template.bind({})
