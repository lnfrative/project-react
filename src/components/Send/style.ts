import styled from 'styled-components'

export const Input = styled.input`
	height: 100%;
	width: 100%;
	background-color: transparent;
	outline: none;
	border: none;
	color: ${props => props.theme.color.activeSecondary};
	font-size: var(--font-size-xs);
`

export const GroupInput = styled.div`
	margin-top: var(--space-lg);
	width: 100%;
`

export const GroupInputLabel = styled.div`
	margin-bottom: var(--space-xs);
	font-size: var(--font-size-xxs);
	color: var(--color-variety-main-shadow);
`

export const GroupInputWrap = styled.div<{ error?: boolean }>`
	display: flex;
	align-items: center;
	height: 50px;
	border-bottom: solid 1px
		${props => {
			if (props.error) return props.theme.color.varietyDownstream
			return props.theme.color.passivePager
		}};
`

export const GroupInputWrapIcon = styled.div`
	color: var(--color-variety-main-shadow);
	margin-right: var(--space-xs);
`

export const ErrorMessage = styled.div`
	font-size: ${props => props.theme.size.xxs};
	color: ${props => props.theme.color.varietyDownstream};
	margin-top: ${props => props.theme.space.sm};
`
