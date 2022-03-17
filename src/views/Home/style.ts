import styled from 'styled-components'

export const Content = styled.div`
  padding: 0 ${props => props.theme.space.md};
  margin-bottom: ${props => props.theme.space.xl};

  ${props => props.theme.mediaQuery.md} {
    padding: 0;
  }
`