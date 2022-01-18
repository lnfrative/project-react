import React from 'react'
import { ComponentStory } from '@storybook/react'
import { ButtonProps } from 'interfaces'
import { Button } from 'components'

export default {
  title: 'Button',
  component: Button,
}

const Template: ComponentStory<typeof Button> = (props: ButtonProps) => <Button {...props} />

export const Test = Template.bind({})

Test.args = {
  title: 'Test',
  buttonHTMLAttributes: {
    style: { width: 300 },
  },
}
