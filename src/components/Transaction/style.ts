import styled from 'styled-components'

export const MovementGroupData = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
  color: ${props => props.theme.color.varietyMainShadow};
  flex-direction: column;

  ${props => props.theme.mediaQuery.sm} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`

export const MovementGroupDataBelow = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	color: ${props => props.theme.color.varietyMainShadow};
  margin-top: ${props => props.theme.space.xs};

  flex-direction: column-reverse;

  ${props => props.theme.mediaQuery.sm} {
    flex-direction: row;
  }
`

export const Data = styled.div`
  margin-left: auto;
  margin-bottom: ${props => props.theme.space.xs};

  ${props => props.theme.mediaQuery.sm} {
    margin-left: 0;
  }
`