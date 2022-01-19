import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CheckboxRhomboidProps } from 'interfaces'
import { CheckboxRhomboid } from 'components'

export default {
  title: 'CheckboxRhomboid',
  component: CheckboxRhomboid
}

const Template: ComponentStory<
  typeof CheckboxRhomboid
> = (props: CheckboxRhomboidProps) => (
  <CheckboxRhomboid {...props} />
)

export const Test = Template.bind({})

Test.args = {
  onCheck: () => {}
}
