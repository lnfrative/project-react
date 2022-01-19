import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CoinPaginationOverview } from 'components'

export default {
	title: 'CoinPaginationOverview',
	component: CoinPaginationOverview,
}

const Template: ComponentStory<typeof CoinPaginationOverview> = () => <CoinPaginationOverview />

export const Test = Template.bind({})
