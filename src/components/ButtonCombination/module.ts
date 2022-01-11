// region import
import classNames from 'classnames'

// utilities
import { ButtonCombinationProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function nestStyles(props: ButtonCombinationProps) {
  return {
    button: classNames(styles.button, {
      [styles.after]: props.position === 'after',
      [styles.before]: props.position === 'before',
    }),
  }
}

export {
  nestStyles,
}
