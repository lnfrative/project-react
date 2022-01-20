import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValueVariationProps } from 'interfaces'
import { ValueVariation } from 'components'

export default {
	title: 'ValueVariation',
	component: ValueVariation,
}

const Template: ComponentStory<typeof ValueVariation> = (props: ValueVariationProps) => (
	<ValueVariation {...props} />
)

export const Test = Template.bind({})

Test.args = {
	value: 45.54,
	design: 'medium',
}
