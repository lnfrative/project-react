import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContentHeader = styled.div`
  min-height: inherit;
	max-width: 1715px;

	display: flex;
	justify-content: space-between;
	flex: 1;

	padding: 0 ${props => props.theme.space.md};

  ${props => props.theme.mediaQuery.md} {
    padding: 0 ${props => props.theme.space.xl};
  }
`

export const Page = styled.div`
	flex: 1;

	display: flex;
	justify-content: center;

  ${props => props.theme.mediaQuery.md} {
    padding: 0 ${props => props.theme.space.xl};
  }
`

export const Logo = styled(Link)`
	text-decoration: none;
	display: none;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	cursor: pointer;
	user-select: none;

	&:active {
		opacity: ${props => props.theme.opacity.selecting};
	}

	${props => props.theme.mediaQuery.md} {
		display: block;
	}
`