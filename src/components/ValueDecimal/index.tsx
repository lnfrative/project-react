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
			<span className={styles.integer}>
				{props.sign}
				{integer}
			</span>
			<span className={styles.decimal}>
				<span>.</span>
				{!!decimal && (
					<span>{decimal.concat('00000000'.slice(0, props.decimals ?? 8 - decimal.length))}</span>
				)}
				{!decimal && <span>{'00000000'.slice(0, props.decimals ?? 8)}</span>}
			</span>
		</div>
	)
}

export default ValueDecimal
