import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupSelectValueVariationProps } from 'interfaces'
import { GroupSelectValueVariation } from 'components'

export default {
	title: 'GroupSelectValueVariation',
	component: GroupSelectValueVariation,
}

const Template: ComponentStory<typeof GroupSelectValueVariation> = (
	props: GroupSelectValueVariationProps
) => <GroupSelectValueVariation {...props} />

export const Test = Template.bind({})

Test.args = {
	titleSelect: 'Title',
	valueVariation: 4.56,
	optionsSelect: [
		{ id: 1, value: 'option test', main: true },
		{ id: 2, value: 'option test 2' },
	],
}
