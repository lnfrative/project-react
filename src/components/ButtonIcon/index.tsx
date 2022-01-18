// region import
import React, { PropsWithChildren } from 'react'

// utilities
import { ButtonIconProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function ButtonIcon(props: PropsWithChildren<ButtonIconProps>) {
	return (
		<button type="button" onClick={props.onClick} className={styles.button}>
			{props.children}
		</button>
	)
}

export default ButtonIcon
