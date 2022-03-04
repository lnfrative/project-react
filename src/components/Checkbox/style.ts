import styled from 'styled-components'
import { CheckboxProps } from 'interfaces'

export const Input = styled('input')`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`

export const Label = styled.label`
	display: block;
	position: relative;
	cursor: pointer;
	user-select: none;

	width: 15px;
	height: 15px;
`

export const CheckMark = styled.span<CheckboxProps>`
	position: absolute;
	top: 0;
	left: 0;
	height: 15px;
	width: 15px;

	border: solid 2px
		${props => {
			if (props.design === 'rhomboid') return props.theme.color.activeMain
			return props.theme.color.activeLoad
		}};

	${props => props.design === 'rhomboid' && 'transform: rotate(45deg);'}

	&:after {
		content: ${props => {
			if (props.design === 'rhomboid') return '""'
			return '"✔"'
		}};
		position: absolute;
		display: ${props => (props.checked ? 'flex' : 'none')};

		justify-content: center;
		align-items: center;
		color: ${props => props.theme.color.varietyMain};

		width: 15px;
		height: 15px;
		background: ${props => {
			if (props.design === 'rhomboid') return props.theme.color.activeMain
			return props.theme.color.activeLoad
		}};
	}
`
