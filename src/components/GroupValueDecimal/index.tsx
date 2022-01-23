// region import
import React from 'react'

// utilities
import { GroupValueDecimalProps } from 'interfaces'

// components
import { ValueDecimal } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupValueDecimal(props: GroupValueDecimalProps) {
	return (
		<div className={styles.container}>
			{props.design === 'top' && <div className={styles.title}>{props.title}</div>}
			<ValueDecimal sise="huge" value={props.value} />
			{props.design === 'bottom' && <div className={styles.title}>{props.title}</div>}
		</div>
	)
}

export default GroupValueDecimal
