import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValueDecimalProps } from 'interfaces'
import { ValueDecimal } from 'components'

export default {
	title: 'ValueDecimal',
	component: ValueDecimal,
}

const Template: ComponentStory<typeof ValueDecimal> = (props: ValueDecimalProps) => (
	<ValueDecimal {...props} />
)

export const Test = Template.bind({})

Test.args = {
	value: 45.74568,
	sise: 'medium',
}
