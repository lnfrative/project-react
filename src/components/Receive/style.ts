import styled from 'styled-components'

export const Values = styled('div')`
	background-color: var(--color-primary);
	margin-bottom: var(--space-lg);
`

export const GroupReceiveButtons = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;

	margin-top: ${props => props.theme.space.lg};

	${props => props.theme.mediaQuery.sm} {
		flex-direction: row;
	}
`

export const StyledReceiveButton = styled('div')`
	margin: ${props => props.theme.space.xs};

	${props => props.theme.mediaQuery.sm} {
		margin: 0;
	}
`