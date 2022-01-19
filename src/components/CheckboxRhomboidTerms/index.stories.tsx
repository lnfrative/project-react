import React from 'react'
import { ComponentStory } from '@storybook/react'
import { CheckboxRhomboidTermsProps } from 'interfaces'
import { CheckboxRhomboidTerms } from 'components'

export default {
	title: 'CheckboxRhomboidTerms',
	component: CheckboxRhomboidTerms,
}

const Template: ComponentStory<typeof CheckboxRhomboidTerms> = (
	props: CheckboxRhomboidTermsProps
) => <CheckboxRhomboidTerms {...props} />

export const Test = Template.bind({})

Test.args = {
	checkboxRhomboidProps: {
		onCheck: () => {},
	},
}
