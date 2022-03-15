import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const SubContainer = styled.div`
  margin-bottom: ${props => props.theme.space.lg};
`

export const Label = styled.div`
  color: ${props => props.theme.color.varietyMainShadow};
  margin-bottom: ${props => props.theme.space.md};
`