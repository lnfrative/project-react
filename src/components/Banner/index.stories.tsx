import React from 'react'
import Banner from './index'

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
