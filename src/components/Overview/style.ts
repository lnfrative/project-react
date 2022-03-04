import styled from 'styled-components'

export const StyledPanel = styled('div')`
	margin-bottom: ${props => props.theme.space.lg};
`

export const ContainerCheckbox = styled.div`
	margin-bottom: ${props => props.theme.space.lg};

	display: flex;
	align-items: center;

	color: ${props => props.theme.color.varietyMainShadow};
`

export const StyledCheckbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: ${props => props.theme.space.sm};
	height: 44px;
	width: 44px;
`
