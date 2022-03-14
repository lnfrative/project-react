import styled from 'styled-components'

export const SelectValues = styled.div`
  display: flex;
  margin-top: var(--space-sm);
  flex-direction: column;

  ${props => props.theme.mediaQuery.sm} {
    flex-direction: row;
  }
`

export const SelectSpacing = styled.div`
  margin-bottom: ${props => props.theme.space.lg};

  ${props => props.theme.mediaQuery.sm} {
    margin-right: ${props => props.theme.space.xl};
    margin-bottom: 0;
  }
`

export const StyledGroupValueDecimal = styled.div`
  margin-bottom: ${props => props.theme.space.md};
`