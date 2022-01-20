import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValuePercentageProps } from 'interfaces'
import { ValuePercentage } from 'components'

export default {
	title: 'ValuePercentage',
	component: ValuePercentage,
}

const Template: ComponentStory<typeof ValuePercentage> = (props: ValuePercentageProps) => (
	<ValuePercentage {...props} />
)

export const Test = Template.bind({})

Test.args = {
	value: 45,
}
