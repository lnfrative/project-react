import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ButtonCombinationProps } from 'interfaces'
import { ButtonCombination } from 'components'

export default {
	title: 'ButtonCombination',
	component: ButtonCombination,
}

const Template: ComponentStory<typeof ButtonCombination> = (props: ButtonCombinationProps) => (
	<ButtonCombination {...props} />
)

export const After = Template.bind({})
export const Before = Template.bind({})

After.args = {
	title: 'After',
	position: 'after',
}

Before.args = {
	title: 'Before',
	position: 'before',
}
