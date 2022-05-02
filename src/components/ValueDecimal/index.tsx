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
	const signLeftPosition = props.signPosition === 'left' || !props.signPosition

	const value = resources.utils.splitFloat(
		signLeftPosition ? Math.abs(props.value) : props.value, props.decimals
	)
	return (
		<Container>
			<Integer size={props.sise}>
				{signLeftPosition && props.value < 0 && '-'}
				{signLeftPosition && props.sign}
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
