import styled from 'styled-components'

export const Container = styled('div')`
	display: flex;
	flex-direction: column;

	${props => props.theme.mediaQuery.xl} {
		flex-direction: row;
	}
`

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const Revenues = styled('div')`
	display: grid;
	gap: ${props => props.theme.space.xl};

	${props => props.theme.mediaQuery.lg} {
		display: flex;
		gap: none;
		justify-content: space-between;
		align-items: center;
	}
`

export const PrimaryContent = styled('div')`
	flex: 2;
`

export const SecondaryContent = styled('div')`
	flex: 1;

	${props => props.theme.mediaQuery.xl} {
		margin-left: ${props => props.theme.space.lg};
	}
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
        margin: ${props.theme.space.xl} 0;
      `}
`

export const ContainerValue = styled('div')`
	/* empty */
`

export const LoaderContainer = styled('div')`
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${props => props.theme.color.varietyMainShadow};
`
