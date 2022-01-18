import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CardValueProps } from 'interfaces'
import { CardValue } from 'components'

export default {
    title: 'CardValue',
    component: CardValue,
}

const Template: ComponentStory<
    typeof CardValue
> = (props: CardValueProps) => (
    <CardValue {...props} />
)

export const Test = Template.bind({})

Test.args = {
    title: 'Title',
    value: 455.65,
    sign: '%'
}
