import React from 'react'
import { ComponentStory } from '@storybook/react'
import { FormAuthRecoverPassword } from 'components'

export default {
	title: 'FormAuthRecoverPassword',
	component: FormAuthRecoverPassword,
}

const Template: ComponentStory<typeof FormAuthRecoverPassword> = () => <FormAuthRecoverPassword />

export const Test = Template.bind({})
