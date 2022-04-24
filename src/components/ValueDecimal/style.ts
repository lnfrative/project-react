import styled from 'styled-components'

export const Container = styled('div')``

export const Integer = styled('span')<{ size: 'small' | 'medium' | 'large' | 'huge' }>`
	color: ${props => props.theme.color.varietyMain};
	font-size: ${props => {
		if (props.size === 'small') {
			return props.theme.size.xs
		}
		if (props.size === 'medium') {
			return props.theme.size.xl
		}
		if (props.size === 'large') {
			return props.theme.size.xxl
		}
		return props.theme.size.huge
	}};
`

export const SignRight = styled('span')<{ size: 'small' | 'medium' | 'large' | 'huge' }>`
	color: ${props => props.theme.color.varietyMainShadow};
	font-size: ${props => {
		if (props.size === 'small') {
			return props.theme.size.xs
		}
		if (props.size === 'medium') {
			return props.theme.size.xl
		}
		if (props.size === 'large') {
			return props.theme.size.xxl
		}
		return props.theme.size.huge
	}};
`

export const Decimal = styled('span')<{ size: 'small' | 'medium' | 'large' | 'huge', sameSize: boolean }>`
	color: ${props => props.theme.color.varietyMainShadow};
	font-size: ${props => {
		if (props.size === 'small') {
			if (props.sameSize) return props.theme.size.xs
			return props.theme.size.xxxs
		}
		if (props.size === 'medium') {
			if (props.sameSize) return props.theme.size.xl
			return props.theme.size.sm
		}
		if (props.size === 'large') {
			if (props.sameSize) return props.theme.size.xxl
			return props.theme.size.md
		}
		if (props.sameSize) return props.theme.size.huge
		return props.theme.size.xl
	}};
`
