import styled from 'styled-components'

export const ContainerBar = styled.div`
	display: flex;

	height: 40px;

	border-bottom: solid 1px ${props => props.theme.color.varietyMainTinyShadow};
	margin-bottom: ${props => props.theme.space.lg};
	overflow-x: auto;

  &::-webkit-scrollbar {
	  width: 0;
  }

  padding: 0 ${props => props.theme.space.xs};

  ${props => props.theme.mediaQuery.md} {
    padding: 0;
  }
`