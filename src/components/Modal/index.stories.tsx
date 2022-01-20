import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Modal } from 'components'

export default {
	title: 'Modal',
	component: Modal,
}

const Template: ComponentStory<typeof Modal> = () => (
	<Modal>
		<div style={{ color: 'white' }}>Children.</div>
	</Modal>
)

export const Test = Template.bind({})
