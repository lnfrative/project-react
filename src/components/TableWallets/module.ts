import classNames from 'classnames'
import styles from './style.css'

function nestStyles() {
  return {
    container: styles.container,
    header: classNames(styles.row, styles.header),
    headerCell: styles.headerCell,
    arrow: styles.arrow,
    row: styles.row,
  }
}

export {
  nestStyles,
}
