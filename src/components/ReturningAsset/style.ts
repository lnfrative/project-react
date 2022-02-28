import styled from 'styled-components'

export const Container = styled('div')`
	display: flex;
	justify-content: space-between;
	max-width: 310px;
`

export const Group = styled('div')``

export const PrimaryTitle = styled('div')`
	${props =>
		`
        color: ${props.theme.color.varietyMain};
        font-size: ${props.theme.size.xxs};
        margin-bottom: ${props.theme.space.xxxs};
      `}
`

export const SecondaryTitle = styled('div')`
	${props =>
		`
        color: ${props.theme.color.varietyMainShadow};
        font-size: ${props.theme.size.xxxs};
      `}
`
