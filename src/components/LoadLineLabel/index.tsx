// region import
import React from 'react'

// interfaces
import { LoadLineLabelProps } from 'interfaces'

// components
import { LoadLine } from 'components'

// styles
import { Container, Labels, LoadLineLabelSkeleton } from './style'
// endregion

function LoadLineLabel(props: LoadLineLabelProps) {
	return (
		<Container>
			<Labels>
				<span>{props.title}</span>
				<span>{props.value} %</span>
			</Labels>
			<LoadLine {...props} />
		</Container>
	)
}

export { LoadLineLabelSkeleton }

export default LoadLineLabel
