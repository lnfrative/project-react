import styled from 'styled-components'

export const Container = styled('div')`
	width: 100%;
	background-color: ${props => props.theme.color.varietyMainShadow};
	height: 6px;
	border-radius: 8px;
	overflow: hidden;
`

export const Load = styled('div')`
	background-color: ${props => props.theme.color.activeLoad};
	height: 100%;
`
