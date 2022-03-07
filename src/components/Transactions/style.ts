import styled from 'styled-components'

export const Container = styled('div')`
	display: flex;
	flex-direction: column;

	${props => props.theme.mediaQuery.xl} {
		flex-direction: row;
	}
`

export const PrimaryContent = styled('div')`
	${props => props.theme.mediaQuery.xl} {
		width: 70%;
	}
`

export const SecondaryContent = styled('div')`
	${props => props.theme.mediaQuery.xl} {
		margin-left: ${props => props.theme.space.lg};
		width: 30%;
	}
`

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const ContainerTransaction = styled.div`
		display: flex;
		align-items: center;

		width: 100%;
		margin-bottom: ${props => props.theme.space.lg};
`

export const ContainerFeedback = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${props => props.theme.color.varietyMainShadow};
`

export const ContainerCheckbox = styled.div`
	display: flex;
	margin-bottom: ${props => props.theme.space.sm};
	color: ${props => props.theme.color.varietyMainShadow};
`

export const StyledCheckbox = styled.div`
	margin-right: ${props => props.theme.space.lg};
`

export const StatsHead = styled('div')`
	letter-spacing: 4.1px;
	font-weight: bold;
	${props =>
		`
        font-size: ${props.theme.size.sm};
        color: ${props.theme.color.varietyMainShadow};
        margin: ${props.theme.space.lg} 0;
      `}
`