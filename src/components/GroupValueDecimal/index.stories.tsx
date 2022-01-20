import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupValueDecimalProps } from 'interfaces'
import { GroupValueDecimal } from 'components'

export default {
	title: 'GroupValueDecimal',
	component: GroupValueDecimal,
}

const Template: ComponentStory<typeof GroupValueDecimal> = (props: GroupValueDecimalProps) => (
	<GroupValueDecimal {...props} />
)

export const Top = Template.bind({})
export const Bottom = Template.bind({})

Top.args = {
	value: 5,
	title: 'Top',
	design: 'top',
}

Bottom.args = {
	value: 10,
	title: 'Bottom',
	design: 'bottom',
}
