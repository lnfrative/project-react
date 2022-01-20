import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputLabelPRepeatProps } from 'interfaces'
import { InputLabelPRepeat } from 'components'

export default {
	title: 'InputLabelPRepeat',
	component: InputLabelPRepeat,
}

const Template: ComponentStory<typeof InputLabelPRepeat> = (props: InputLabelPRepeatProps) => (
	<InputLabelPRepeat {...props} />
)

export const Test = Template.bind({})

Test.args = {
	password: '',
	registerInput: () => {},
}
