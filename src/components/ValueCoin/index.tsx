// region import
import React from 'react'

// utilities
import { ValueCoinProps } from 'interfaces'

// components
import { ImgCoin, ValueDecimal } from 'components'

// styles
import styles from './index.module.css'
// endregion

function ValueCoin(props: ValueCoinProps) {
	return (
		<div className={styles.container}>
			<ImgCoin size="medium" src={props.srcImageCoin} />
			<div className={styles.values}>
				<ValueDecimal decimals={props.decimals} sise="small" value={props.value} />
				<div className={styles.containerName}>
					<span>{props.name}</span>
					<span className={styles.separator}>-</span>
					<span className={styles.shortname}>{props.shortname}</span>
				</div>
			</div>
		</div>
	)
}

export default ValueCoin
