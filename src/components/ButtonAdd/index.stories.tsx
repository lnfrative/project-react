import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ButtonAddProps } from 'interfaces'
import { ButtonAdd } from 'components'

export default {
	title: 'ButtonAdd',
	component: ButtonAdd,
}

const Template: ComponentStory<typeof ButtonAdd> = (props: ButtonAddProps) => (
	<ButtonAdd {...props} />
)

export const Test = Template.bind({})

Test.args = {
	title: 'This is a ButtonAdd',
	onClick: () => {},
}
