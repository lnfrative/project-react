import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupBrand } from 'components'

export default {
	title: 'GroupBrand',
	component: GroupBrand,
}

const Template: ComponentStory<typeof GroupBrand> = () => <GroupBrand />

export const Test = Template.bind({})
