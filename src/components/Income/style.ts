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
