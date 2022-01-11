// region import
import classNames from 'classnames'

// interfaces
import { Error } from 'utilities/Interfaces'

import styles from './style.css'
// endregion

function nestStyles(args: { error?: Error }) {
  const hasError = !!args.error?.data
  return {
    container: styles.container,
    input: classNames(styles.common, {
      [styles.inputError]: hasError,
      [styles.inputNormal]: !hasError,
    }),
    errorContainer: styles.errorContainer,
    errorSign: styles.errorSign,
    errorMessage: styles.errorMessage,
  }
}

export { nestStyles }
