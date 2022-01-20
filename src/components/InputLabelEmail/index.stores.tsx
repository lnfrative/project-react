import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputLabelEmailProps } from 'interfaces'
import { InputLabelEmail } from 'components'

export default {
	title: 'InputLabelEmail',
	component: InputLabelEmail,
}

const Template: ComponentStory<typeof InputLabelEmail> = (props: InputLabelEmailProps) => (
	<InputLabelEmail {...props} />
)

export const Test = Template.bind({})

Test.args = {
	disableError: false,
	registerInput: () => {},
}
