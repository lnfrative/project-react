import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputLabelProps } from 'interfaces'
import { InputLabel } from 'components'

export default {
	title: 'InputLabel',
	component: InputLabel,
}

const Template: ComponentStory<typeof InputLabel> = (props: InputLabelProps) => (
	<InputLabel {...props} />
)

export const Test = Template.bind({})

Test.args = {
	title: 'Title',
	inputProps: {
		error: { sign: '!', data: { message: 'Message.' } },
		InputHTMLAttributes: { type: 'email' },
	},
}
