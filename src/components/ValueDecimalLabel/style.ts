import styled from 'styled-components'

export const Label = styled('div')`
	letter-spacing: 3.7px;

	${props =>
		`
          color: ${props.theme.color.varietyMainShadow};
          font-size: ${props.theme.size.sm};
          margin-top: ${props.theme.space.xxxs};
      `}
`
