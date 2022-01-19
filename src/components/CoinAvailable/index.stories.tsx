import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CoinAvailableProps } from 'interfaces'
import { CoinAvailable } from 'components'
import { resources } from 'utilities'

export default {
  title: 'CoinAvailable',
  component: CoinAvailable,
}

const Template: ComponentStory<
  typeof CoinAvailable
> = (props: CoinAvailableProps) => (
  <CoinAvailable {...props} />
)

export const Test = Template.bind({})

Test.args = {
  srcImageCoin: resources.coin.dogecash.logo,
  name: 'DogeCash',
  id: 1,
  asset: 'DOGEC'
}