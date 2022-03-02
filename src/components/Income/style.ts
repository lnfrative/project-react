import styled from 'styled-components'

export const Container = styled('div')`
	display: flex;
`

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const Revenues = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const PrimaryContent = styled('div')`
	flex: 5;
`

export const SecondaryContent = styled('div')`
	flex: 2;
	margin-left: ${props => props.theme.space.lg};
`

export const StyledLoadLineLabel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const StatsHead = styled('div')`
	letter-spacing: 4.1px;
	font-weight: bold;
	${props =>
		`
        font-size: ${props.theme.size.sm};
        color: ${props.theme.color.varietyMainShadow};
        margin-bottom: ${props.theme.space.lg};
				margin-top: ${props.theme.space.lg};
      `}
`

export const ContainerValue = styled('div')`
	/* empty */
`

export const LoaderContainer = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;
`
