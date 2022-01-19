import React from 'react'
import { ComponentStory } from '@storybook/react'
import { FormAuthResetPassword } from 'components'

export default {
	title: 'FormAuthResetPassword',
	component: FormAuthResetPassword,
}

const Template: ComponentStory<typeof FormAuthResetPassword> = () => <FormAuthResetPassword />

export const Test = Template.bind({})
