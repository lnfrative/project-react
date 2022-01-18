import React from 'react'
import { ComponentStory } from '@storybook/react'
import { BackdropLoaderProps } from 'interfaces'
import { BackdropLoader } from 'components'

export default {
	title: 'BackdropLoader',
	component: BackdropLoader,
}

const Template: ComponentStory<typeof BackdropLoader> = (props: BackdropLoaderProps) => (
	<BackdropLoader {...props} />
)

export const Test = Template.bind({})

Test.args = {
	message: 'Something for testing purposes.',
	open: true,
}
