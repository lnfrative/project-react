// region import
import React from 'react'

// utilities
import { ValuePoolProps } from 'interfaces'

// components
import { ValueDecimal, ValuePercentage } from 'components'

// styles
import styles from './index.module.css'
// endregion

function ValuePool(props: ValuePoolProps) {
	return (
		<div className={styles.container}>
			<ValueDecimal sise="small" value={props.valueDecimal} />
			<ValuePercentage value={props.valuePercentage} />
		</div>
	)
}

export default ValuePool
