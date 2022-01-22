import classNames from 'classnames'
import { ButtonProps } from 'interfaces'
import styles from './index.module.css'

function createStyles(props: ButtonProps) {
	return {
		button: classNames(styles.inherit, {
			[styles.normal]: props.design === 'normal',
			[styles.simple]: props.design === 'simple',
		}),
	}
}

export { createStyles }
