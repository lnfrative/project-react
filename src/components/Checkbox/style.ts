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

	border-radius: 5px;

	border: solid 2px
		${props => {
			if (props.design === 'rhomboid') return props.theme.color.activeMain
			return props.theme.color.activeLoad
		}};

	${props => props.design === 'rhomboid' && 'transform: rotate(45deg);'}

	&:after {
		content: "";
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

		${props => {
			if (props.design === 'standard') {
				return (
					`
						background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.371' height='7.677' viewBox='0 0 10.371 7.677'%3E%3Cpath fill='rgb(176,169,230)' fill-rule='evenodd' d='M3.3 6.07291667l-2.475-2.40625L0 4.46875l3.3 3.20833333 7.07142857-6.875L9.54642857 0 3.3 6.07291667z'/%3E%3C/svg%3E");
						background-repeat: no-repeat;
						background-position: center;
					`
				)
			}
			return ""
		}}
	}
`
