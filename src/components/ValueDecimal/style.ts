import styled from 'styled-components'
import { ValueDecimalProps } from 'interfaces'

export const Container = styled('div')``

export const Integer = styled('span')<ValueDecimalProps>`
	color: ${props => props.theme.color.varietyMain};
	font-size: ${props => {
		if (props.sise === 'small') {
			return props.theme.size.xs
		}
		if (props.sise === 'medium') {
			return props.theme.size.xl
		}
		if (props.sise === 'large') {
			return props.theme.size.xxl
		}
		return props.theme.size.huge
	}};
`

export const SignRight = styled('span')<ValueDecimalProps>`
	color: ${props => props.theme.color.varietyMainShadow};
	font-size: ${props => {
		if (props.sise === 'small') {
			return props.theme.size.xs
		}
		if (props.sise === 'medium') {
			return props.theme.size.xl
		}
		if (props.sise === 'large') {
			return props.theme.size.xxl
		}
		return props.theme.size.huge
	}};
`

export const Decimal = styled('span')<ValueDecimalProps>`
	color: ${props => props.theme.color.varietyMainShadow};
	font-size: ${props => {
		if (props.sise === 'small') {
			if (props.sameSize) return props.theme.size.xs
			return props.theme.size.xxxs
		}
		if (props.sise === 'medium') {
			if (props.sameSize) return props.theme.size.xl
			return props.theme.size.sm
		}
		if (props.sise === 'large') {
			if (props.sameSize) return props.theme.size.xxl
			return props.theme.size.md
		}
		if (props.sameSize) return props.theme.size.huge
		return props.theme.size.xl
	}};
`
