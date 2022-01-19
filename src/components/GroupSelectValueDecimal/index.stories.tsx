import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupSelectValueDecimalProps } from 'interfaces'
import { GroupSelectValueDecimal } from 'components'

export default {
	title: 'GroupSelectValueDecimal',
	component: GroupSelectValueDecimal,
}

const Template: ComponentStory<typeof GroupSelectValueDecimal> = (
	props: GroupSelectValueDecimalProps
) => <GroupSelectValueDecimal {...props} />

export const Test = Template.bind({})

Test.args = {
	titleSelect: 'title',
	valueDecimal: 5.4,
	optionsSelect: [
		{ id: 1, value: 'option test', main: true },
		{ id: 2, value: 'option test 2' },
	],
}
