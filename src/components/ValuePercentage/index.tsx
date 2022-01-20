// region import
import React from 'react'

// utilities
import { ValuePercentageProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function ValuePercentage(props: ValuePercentageProps) {
	return (
		<div className={styles.container}>
			<span>{props.value}</span>
			<span className={styles.sign}>%</span>
		</div>
	)
}

export default ValuePercentage
