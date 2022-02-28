import styled from 'styled-components'

export const Container = styled('div')`
	width: 100%;
`

export const Labels = styled('div')`
	display: flex;
	justify-content: space-between;
	letter-spacing: 3.29px;
	color: ${props => props.theme.color.varietyMainShadow};

	${props =>
		`
        color: ${props.theme.color.varietyMainShadow};
        margin-bottom: ${props.theme.space.sm};
      `}
`
