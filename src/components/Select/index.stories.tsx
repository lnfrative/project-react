import React from 'react'
import { ComponentStory } from '@storybook/react'
import { SelectProps } from 'interfaces'
import { Select } from 'components'

export default {
	title: 'Select',
	component: Select,
}

const Template: ComponentStory<typeof Select> = (props: SelectProps) => <Select {...props} />

export const Test = Template.bind({})

Test.args = {
	title: 'Title',
	design: 'filled',
	onSelect: () => {},
	options: [
		{ id: 'a', value: 'test a', main: true },
		{ id: 'b', value: 'test b', main: false },
	],
}
