import React from 'react'
import { ComponentStory } from '@storybook/react'
import { SelectProps } from 'interfaces'
import { ImgCoin, Select } from 'components'
import { resources } from 'utilities'

export default {
	title: 'Select',
	component: Select,
}

const Template: ComponentStory<typeof Select> = (props: SelectProps) => <Select {...props} />

export const Test = Template.bind({})

Test.args = {
	title: 'Title',
	design: 'filled',
	onSelect: () => {},
	options: [
		{
			id: 'a',
			value: 'StakeCubeCoin',
			main: true,
			secondaryValue: 'SCC',
			element: <ImgCoin size="small" src={resources.coin.stakecube.logo} />,
		},
		{
			id: 'b',
			value: 'test b',
			main: false,
			secondaryValue: 'Secondary value',
			element: <ImgCoin size="small" src={resources.coin.stakecube.logo} />,
		},
	],
}
