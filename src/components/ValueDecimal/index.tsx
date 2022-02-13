// region import
import React from 'react'

// interfaces
import { ValueDecimalProps } from 'interfaces'

// utilities
import { resources } from 'utilities'

// modules
import { nestStyles } from './module'
// endregion

function ValueDecimal(props: ValueDecimalProps) {
	const value = resources.utils.splitFloat(props.value, props.decimals)
	const styles = nestStyles(props)
	return (
		<div>
			<span className={styles.integer}>
				{props.sign}
				{value.integer}
			</span>
			<span className={styles.decimal}>
				<span>.</span>
				{value.decimal}
			</span>
		</div>
	)
}

export default ValueDecimal
