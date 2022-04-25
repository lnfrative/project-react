// region import
import React from 'react'
import { Skeleton } from '@mui/material'

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
			{props.design === 'top' && (
				<>
					{!!props.loading && (
						<Skeleton>
							<div className={styles.title}>{props.title}</div>
						</Skeleton>
					)}
					{!props.loading && (
						<div className={styles.title}>{props.title}</div>
					)}
				</>
			)}
			{!!props.loading && (
				<Skeleton>
					<ValueDecimal decimals={props.decimals} sign={props.sign} sise="huge" value={props.value} />
				</Skeleton>
			)}
			{!props.loading && (
				<ValueDecimal decimals={props.decimals} sign={props.sign} sise="huge" value={props.value} />
			)}
			{props.design === 'bottom' && (
				<>
					{!!props.loading && (
						<Skeleton>
							<div className={styles.title}>{props.title}</div>
						</Skeleton>
					)}
					{!props.loading && (
						<div className={styles.title}>{props.title}</div>
					)}
				</>
			)}
		</div>
	)
}

export default GroupValueDecimal
