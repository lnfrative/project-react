// region import
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

// interfaces
import { PanelProps } from 'interfaces'
// endregion

const Container = styled('div')`
	background-color: ${props => props.theme.color.activeMain};
`

const Content = styled('div')`
	${props =>
		`
        padding: ${props.theme.space.lg} ${props.theme.space.xl};
      `}
`

const Title = styled('div')`
	${props =>
		`
        color: ${props.theme.color.varietyMainShadow};
        font-size: ${props.theme.size.sm};
        letter-spacing: 3.7px;
        border-bottom: solid 1px ${props.theme.color.varietyMainTinyShadow};
        padding: ${props.theme.space.lg} ${props.theme.space.xl};
      `}
`

function Panel(props: PropsWithChildren<PanelProps>) {
	return (
		<Container>
			<Title>{props.title}</Title>
			<Content>{props.children}</Content>
		</Container>
	)
}

export default Panel
