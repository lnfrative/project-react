import React from 'react'
import { ComponentStory } from '@storybook/react'
import { FormAuthLogin } from 'components'

export default {
	title: 'FormAuthLogin',
	component: FormAuthLogin,
}

const Template: ComponentStory<typeof FormAuthLogin> = () => <FormAuthLogin />

export const Test = Template.bind({})
