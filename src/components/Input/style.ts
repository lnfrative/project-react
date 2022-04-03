import { InputProps } from 'interfaces'
import styled from 'styled-components'

export const StyledInput = styled.input<{ componentProps: InputProps }>`
	height: 100%;
	width: 100%;
	background-color: transparent;
	outline: none; 
	border: none;
	color: ${props => props.theme.color.activeSecondary};
	font-size: var(--font-size-xs);
	padding-left: ${props => props.componentProps.Icon ? 0 : 'var(--space-sm)'};

	&:disabled {
		cursor: text;
	}
`

export const GroupInputWrapIcon = styled.div`
	color: var(--color-variety-main-shadow);
	margin-right: var(--space-xs);
`

export const GroupInputWrap = styled.div<{ error?: boolean }>`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 45px;
	border-bottom: solid 2px var(--color-novenary);
	background-color: var(--color-octary);
`