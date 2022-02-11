// region import
import React, { PropsWithChildren } from 'react'

// utilities
import { ButtonProps } from 'interfaces'

// styles
import { createStyles } from './module'
// endregion

function Button(props: PropsWithChildren<ButtonProps>) {
	const styles = createStyles(props)
	return (
		<button {...props.buttonHTMLAttributes} className={styles.button}>
			{props.children}
			{props.title}
		</button>
	)
}

export default Button
