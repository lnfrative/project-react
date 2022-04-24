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
			<Integer size={props.sise}>
				{!props.signPosition && props.sign}
				{props.signPosition === 'left' && props.sign}
				{value.integer}
			</Integer>
			<Decimal sameSize={!!props.sameSize} size={props.sise}>
				{props.decimals !== 0 && <span>.</span>}
				{value.decimal}
			</Decimal>
			{props.signPosition === 'right' && <SignRight size={props.sise}>{props.sign}</SignRight>}
		</Container>
	)
}

export default ValueDecimal
