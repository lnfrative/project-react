import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ImgCoinProps } from 'interfaces'
import { ImgCoin } from 'components'
import { resources } from 'utilities'

export default {
	title: 'ImgCoin',
	component: ImgCoin,
}

const Template: ComponentStory<typeof ImgCoin> = (props: ImgCoinProps) => <ImgCoin {...props} />

export const Test = Template.bind({})

Test.args = {
	size: 'small',
	src: resources.coin.dogecash.logo,
}
