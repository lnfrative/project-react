// region import
import React, { PropsWithChildren } from 'react'

// utilities
import { SettingPaginationProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function SettingPagination(props: PropsWithChildren<SettingPaginationProps>) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.content}>{props.children}</div>
		</div>
	)
}

export default SettingPagination
