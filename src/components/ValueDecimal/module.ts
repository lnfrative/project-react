// region import
import classNames from 'classnames'

// utilities
import { ValueDecimalProps } from 'interfaces'

// styles
import styles from './index.module.css'
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
