import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupCoinValues } from 'components'

export default {
	title: 'GroupCoinValues',
	component: GroupCoinValues,
}

const Template: ComponentStory<typeof GroupCoinValues> = () => <GroupCoinValues />

export const Test = Template.bind({})
