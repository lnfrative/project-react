import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ValueCoinProps } from 'interfaces'
import { ValueCoin } from 'components'
import { resources } from 'utilities'

export default {
	title: 'ValueCoin',
	component: ValueCoin,
}

const Template: ComponentStory<typeof ValueCoin> = (props: ValueCoinProps) => (
	<ValueCoin {...props} />
)

export const Test = Template.bind({})

Test.args = {
	name: 'DogeCash',
	shortname: 'DOGEC',
	value: 45.254,
	srcImageCoin: resources.coin.dogecash.logo,
}
