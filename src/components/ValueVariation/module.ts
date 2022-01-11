// region import
import classNames from 'classnames'

// utilities
import { ValueVariationProps } from 'utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function nestStyles(props: ValueVariationProps) {
  return {
    container: classNames(styles.container, styles[`${props.design}Font`], {
      [styles.upstream]: props.value > 0,
      [styles.downstream]: props.value < 0,
    }),
  }
}

export {
  nestStyles,
}
