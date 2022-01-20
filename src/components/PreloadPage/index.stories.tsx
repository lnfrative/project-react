import React from 'react'
import { ComponentStory } from '@storybook/react'
import { PreloadPage } from 'components'

export default {
	title: 'PreloadPage',
	component: PreloadPage,
}

const Template: ComponentStory<typeof PreloadPage> = () => <PreloadPage />

export const Test = Template.bind({})
