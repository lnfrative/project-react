// region import
import React from 'react'

// interfaces
import { ValueDecimalLabelProps } from 'interfaces'

// components
import { ValueDecimal } from 'components'

// styles
import { Label } from './style'
// endregion

function ValueDecimalLabel(props: ValueDecimalLabelProps) {
	return (
		<div>
			<ValueDecimal {...props} sameSize />
			<Label>{props.title}</Label>
		</div>
	)
}

export default ValueDecimalLabel
