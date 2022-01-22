// region import
import React from 'react'

// utilities
import { ButtonProps } from 'interfaces'

// styles
import { createStyles } from './module'
// endregion

function Button(props: ButtonProps) {
	const styles = createStyles(props)
	return (
		<button {...props.buttonHTMLAttributes} className={styles.button}>
			{props.title}
		</button>
	)
}

export default Button
