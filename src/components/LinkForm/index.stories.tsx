import React from 'react'
import { ComponentStory } from '@storybook/react'
import { LinkFormProps } from 'interfaces'
import { LinkForm } from 'components'

export default {
	title: 'LinkForm',
	component: LinkForm,
}

const Template: ComponentStory<typeof LinkForm> = (props: LinkFormProps) => <LinkForm {...props} />

export const Test = Template.bind({})

Test.args = {
	path: '/',
	message: 'Message',
	linkName: 'Link name',
}
