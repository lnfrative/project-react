import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.size.xxs};

  ${props => props.theme.mediaQuery.md} {
    flex-direction: row;
  }
`

export const ConfirmEmail = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.space.xs};

  ${props => props.theme.mediaQuery.md} {
    margin-bottom: 0;
  }
`