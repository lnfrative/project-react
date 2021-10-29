// region import
import classNames from 'classnames'

// utilities
import { ButtonCombinationProps } from '@/utilities/Interfaces'

// styles
import styles from './style.css'
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
