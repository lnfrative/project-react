// region import
import React from 'react'
import { Skeleton } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// utilities
import { GroupSelectValueDecimalProps } from 'interfaces'

// components
import { Select, ValueDecimal } from 'components'

// styles
import styles from './index.module.css'

// modules
import { initialState, genOnSelect } from './module'
// endregion

function GroupSelectValueDecimal(props: GroupSelectValueDecimalProps) {
	const stage = useStage(initialState)
	return (
		<div className={styles.container}>
			{!!props.loading && (
				<Skeleton>
					<Select
						onSelect={genOnSelect(props, stage)}
						design="simple"
						title={props.titleSelect}
						options={props.optionsSelect}
					/>
				</Skeleton>
			)}
			{!props.loading && (
				<Select
					onSelect={genOnSelect(props, stage)}
					design="simple"
					title={props.titleSelect}
					options={props.optionsSelect}
				/>
			)}
			{!!props.loading && (
				<Skeleton>
					<div className={styles.containerValues}>
						<ValueDecimal sise="medium" value={props.valueDecimal} />
						<span className={styles.optionValue}>{stage.state.optionSelected?.value}</span>
					</div>
				</Skeleton>
			)}
			{!props.loading && (
				<div className={styles.containerValues}>
					<ValueDecimal sise="medium" value={props.valueDecimal} />
					<span className={styles.optionValue}>{stage.state.optionSelected?.value}</span>
				</div>
			)}
		</div>
	)
}

export default GroupSelectValueDecimal
