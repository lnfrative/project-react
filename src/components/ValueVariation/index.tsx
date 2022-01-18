// region import
import React from 'react'

// utilities
import { ValueVariationProps } from 'interfaces'

// modules
import { nestStyles } from './module'
// endregion

function parseVariation(variation: number): string {
	const [number, decimal] = variation.toString().split('.')
	if (decimal) {
		return `${number}.${decimal.slice(0, 2)}`
	}
	return number
}

function ValueVariation(props: ValueVariationProps) {
	const variation = parseVariation(props.value)
	const styles = nestStyles(props)
	return (
		<div className={styles.container}>
			<span>
				{props.value > 0 ? '+' : ''}
				{variation}
			</span>
			<span>%</span>
		</div>
	)
}

export default ValueVariation
