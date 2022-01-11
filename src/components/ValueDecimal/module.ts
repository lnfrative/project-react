// region import
import classNames from 'classnames'

// utilities
import { ValueDecimalProps } from 'utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function nestStyles(arg: ValueDecimalProps) {
  return {
    integer: classNames(styles.integer, styles[`${arg.sise}Integer`]),
    decimal: classNames(styles.decimal, styles[`${arg.sise}Decimal`]),
  }
}

export {
  nestStyles,
}
