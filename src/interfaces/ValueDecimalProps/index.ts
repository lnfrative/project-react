interface ValueDecimalProps {
	value: number
	sise: 'small' | 'medium' | 'large' | 'huge'
	sameSize?: boolean
	sign?: string
	decimals?: number
	signPosition?: 'left' | 'right'
	loading?: boolean
}

export default ValueDecimalProps
