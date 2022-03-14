import styled from 'styled-components'

export const ContentHeader = styled.div`
  min-height: inherit;
	max-width: 1715px;

	display: flex;
	justify-content: space-between;
	flex: 1;

	padding: 0 ${props => props.theme.space.xs};

  ${props => props.theme.mediaQuery.md} {
    padding: 0 ${props => props.theme.space.xl};
  }
`

export const Page = styled.div`
	flex: 1;
	padding: 0 ${props => props.theme.space.xs};

	display: flex;
	justify-content: center;

  ${props => props.theme.mediaQuery.md} {
    padding: 0 ${props => props.theme.space.xl};
  }
`