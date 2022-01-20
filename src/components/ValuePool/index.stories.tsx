import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValuePoolProps } from 'interfaces'
import { ValuePool } from 'components'

export default {
	title: 'ValuePool',
	component: ValuePool,
}

const Template: ComponentStory<typeof ValuePool> = (props: ValuePoolProps) => (
	<ValuePool {...props} />
)

export const Test = Template.bind({})

Test.args = {
	valueDecimal: 4.25,
	valuePercentage: 4.25,
}
