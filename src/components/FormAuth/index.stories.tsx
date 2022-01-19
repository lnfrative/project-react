import React from 'react'
import { ComponentStory } from '@storybook/react'
import { FormAuthProps } from 'interfaces'
import { FormAuth } from 'components'

export default {
	title: 'FormAuth',
	component: FormAuth,
}

const Template: ComponentStory<typeof FormAuth> = (props: FormAuthProps) => (
	<FormAuth {...props}>
		<div style={{ color: 'white' }}>Child</div>
	</FormAuth>
)

export const Test = Template.bind({})

Test.args = {
	title: 'Title',
}
