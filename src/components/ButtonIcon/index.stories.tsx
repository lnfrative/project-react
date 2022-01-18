import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ButtonIconProps } from 'interfaces'
import { ButtonIcon, SVGIconEquis } from 'components'

export default {
	title: 'ButtonIcon',
	component: ButtonIcon,
}

const Template: ComponentStory<typeof ButtonIcon> = (props: ButtonIconProps) => (
	<ButtonIcon {...props}>
		<SVGIconEquis />
	</ButtonIcon>
)

export const Test = Template.bind({})

Test.args = {
	onClick: () => {},
}
