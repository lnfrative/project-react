// region import
import React, { PropsWithChildren } from 'react'

// utilities
import { FormAuthProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function FormAuth(props: PropsWithChildren<FormAuthProps>) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{props.title}</div>
			{props.children}
		</div>
	)
}

export default FormAuth
