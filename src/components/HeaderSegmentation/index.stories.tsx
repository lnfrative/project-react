import React from 'react'
import { ComponentStory } from '@storybook/react'
import { HeaderSegmentationProps } from 'interfaces'
import { HeaderSegmentation } from 'components'

export default {
	title: 'HeaderSegmentation',
	component: HeaderSegmentation,
}

const Template: ComponentStory<typeof HeaderSegmentation> = (props: HeaderSegmentationProps) => (
	<HeaderSegmentation {...props} />
)

export const Test = Template.bind({})

Test.args = {
	primaryContent: <div style={{ color: 'white' }}>Primary content.</div>,
	secondaryContent: <div style={{ color: 'white' }}>Secondary content.</div>,
}
