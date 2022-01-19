import React from 'react'
import { ComponentStory } from '@storybook/react'
import { FormAuthRegister } from 'components'

export default {
	title: 'FormAuthRegister',
	component: FormAuthRegister,
}

const Template: ComponentStory<typeof FormAuthRegister> = () => <FormAuthRegister />

export const Test = Template.bind({})
