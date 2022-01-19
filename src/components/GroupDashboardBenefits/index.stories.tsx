import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupDashboardBenefits } from 'components'

export default {
	title: 'GroupDashboardBenefits',
	component: GroupDashboardBenefits,
}

const Template: ComponentStory<typeof GroupDashboardBenefits> = () => <GroupDashboardBenefits />

export const Test = Template.bind({})
