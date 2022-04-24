// region import
import React from 'react'
import { Skeleton } from '@mui/material'

// utilities
import { GroupSelectValueVariationProps } from 'interfaces'

// components
import { ValueVariation, Select } from 'components'

// styles
import styles from './index.module.css'
// endregion

function GroupSelectValueVariation(props: GroupSelectValueVariationProps) {
	return (
		<div className={styles.container}>
			<Select
				design="simple"
				title={props.titleSelect}
				options={props.optionsSelect}
				onSelect={props.onSelect}
			/>
			{!!props.loading && (
				<Skeleton>
					<ValueVariation design="medium" value={props.valueVariation} />
				</Skeleton>
			)}
			{!props.loading && (
				<ValueVariation design="medium" value={props.valueVariation} />
			)}
		</div>
	)
}

export default GroupSelectValueVariation
