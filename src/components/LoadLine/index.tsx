// region import
import React from 'react'

// interfaces
import { LoadLineProps } from 'interfaces'

// styles
import { Container, Load } from './style'
// endregion

function LoadLine(props: LoadLineProps) {
	return (
		<Container>
			<Load style={{ width: `${props.value}%` }} />
		</Container>
	)
}

export default LoadLine
