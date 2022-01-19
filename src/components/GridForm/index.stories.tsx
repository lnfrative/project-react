import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GridForm } from 'components'

export default {
	title: 'GirdForm',
	component: GridForm,
}

const Template: ComponentStory<typeof GridForm> = () => (
	<GridForm>
		<div>Test child.</div>
	</GridForm>
)

export const Test = Template.bind({})
