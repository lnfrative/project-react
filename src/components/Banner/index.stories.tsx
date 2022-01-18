import React from 'react'
import { Banner } from 'components'

export default {
  title: 'Banner',
  component: Banner,
}

const Template = () => (
  <Banner>
    <div>This is a storybook.</div>
  </Banner>
)

export const Test = Template.bind({})
