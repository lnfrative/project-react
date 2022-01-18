// region import
import classNames from 'classnames'

// utilities
import { ValueVariationProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function nestStyles(props: ValueVariationProps) {
	return {
		container: classNames(styles.container, styles[`${props.design}Font`], {
			[styles.upstream]: props.value > 0,
			[styles.downstream]: props.value < 0,
		}),
	}
}

export { nestStyles }
