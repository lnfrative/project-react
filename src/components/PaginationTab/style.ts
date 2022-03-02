import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PaginationTabProps } from 'interfaces'
import { getPath } from './module'

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Content = styled('div')<{
	componentProps: PaginationTabProps
}>`
	display: flex;
	text-decoration: none;
	cursor: pointer;
	font-size: var(--font-size-sm);
	color: ${props => props.theme.color.varietyMainShadow};
	height: 100%;
	white-space: pre;

	box-sizing: border-box;

	&:hover {
		opacity: var(--opacity-selecting);
	}

	&:active {
		opacity: var(--opacity-selected);
	}

	${props => {
		if (props.componentProps.pathname !== getPath(props.componentProps)) return ''
		return `
            border-bottom: solid 2px var(--color-active-main);
            color: var(--color-active-main);
        `
	}}

	${props => {
		if (!props.componentProps.paginationObject.disabled) return ''
		return `
            cursor: not-allowed;
        `
	}}
`
