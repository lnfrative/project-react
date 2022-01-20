import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputLabelPasswordProps } from 'interfaces'
import { InputLabelPassword } from 'components'

export default {
	title: 'InputLabelPassword',
	component: InputLabelPassword,
}

const Template: ComponentStory<typeof InputLabelPassword> = (props: InputLabelPasswordProps) => (
	<InputLabelPassword {...props} />
)

export const Test = Template.bind({})

Test.args = {
	disableError: false,
	registerInput: () => {},
}
