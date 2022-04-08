// region import
import React from 'react'

// interfaces
import { ValueDecimalProps } from 'interfaces'

// utilities
import { resources } from 'utilities'

// styles
import { Container, Integer, Decimal, SignRight } from './style'
// endregion

function ValueDecimal(props: ValueDecimalProps) {
	const value = resources.utils.splitFloat(props.value, props.decimals)
	return (
		<Container>
			<Integer {...props}>
				{!props.signPosition && props.sign}
				{props.signPosition === 'left' && props.sign}
				{value.integer}
			</Integer>
			<Decimal {...props}>
				{props.decimals !== 0 && <span>.</span>}
				{value.decimal}
			</Decimal>
			{props.signPosition === 'right' && <SignRight {...props}>{props.sign}</SignRight>}
		</Container>
	)
}

export default ValueDecimal
