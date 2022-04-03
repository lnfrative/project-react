import React from 'react'
import { ComponentStory } from '@storybook/react'
import { InputProps } from 'interfaces'
import { Input } from 'components'

export default {
	title: 'Input',
	component: Input,
}

const Template: ComponentStory<typeof Input> = (props: InputProps) => <Input {...props} />

export const Test = Template.bind({})

Test.args = {
	attributes: {},
}
