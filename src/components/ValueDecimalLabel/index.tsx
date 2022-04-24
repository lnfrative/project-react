// region import
import React from 'react'
import { Skeleton } from '@mui/material'

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
			{!!props.loading && (
				<>
					<Skeleton>
						<ValueDecimal {...props} sameSize />
					</Skeleton>
					<Skeleton>
						<Label>{props.title}</Label>
					</Skeleton>
				</>
			)}
			{!props.loading && (
				<>
					<ValueDecimal {...props} sameSize />
					<Label>{props.title}</Label>
				</>
			)}
		</div>
	)
}

export default ValueDecimalLabel
