// region import
import React from 'react'

// utilities
import { ValueDecimalProps } from 'interfaces'

// modules
import { nestStyles } from './module'
// endregion

function ValueDecimal(props: ValueDecimalProps) {
	const [integer, decimal] = String(props.value).split('.')
	const styles = nestStyles(props)
	return (
		<div>
			<span className={styles.integer}>{integer}</span>
			<span className={styles.decimal}>
				<span>.</span>
				{!!decimal && <span>{decimal}</span>}
				{!decimal && <span>00000000</span>}
			</span>
		</div>
	)
}

export default ValueDecimal
