import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValuePriceProps } from 'interfaces'
import { ValuePrice } from 'components'

export default {
	title: 'ValuePrice',
	component: ValuePrice,
}

const Template: ComponentStory<typeof ValuePrice> = (props: ValuePriceProps) => (
	<ValuePrice {...props} />
)

export const Test = Template.bind({})

Test.args = {
	value: 45.45,
}
