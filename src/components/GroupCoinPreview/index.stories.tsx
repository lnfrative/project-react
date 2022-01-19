import React from 'react'
import { ComponentStory } from '@storybook/react'
import { GroupCoinPreviewProps } from 'interfaces'
import { GroupCoinPreview } from 'components'
import { resources } from 'utilities'

export default {
	title: 'GroupCoinPreview',
	component: GroupCoinPreview,
}

const Template: ComponentStory<typeof GroupCoinPreview> = (props: GroupCoinPreviewProps) => (
	<GroupCoinPreview {...props} />
)

export const Test = Template.bind({})

Test.args = {
	srcImgCoin: resources.coin.dogecash.logo,
	nameCoin: 'DogeCash',
	idCoin: 'DOGEC',
}
