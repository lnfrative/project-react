import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CardProps } from 'interfaces'
import { Card } from 'components'

export default {
	title: 'Card',
	component: Card,
}

const Template: ComponentStory<typeof Card> = (props: CardProps) => (
	<Card {...props}>
		<span>This is a card component.</span>
	</Card>
)

export const Test = Template.bind({})
