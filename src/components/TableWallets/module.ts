import classNames from 'classnames'
import styles from './style.css'

interface ItemProps {
  final: boolean,
}

function nestStyles(props?: ItemProps | undefined) {
  return {
    container: styles.container,
    header: classNames(styles.row, styles.header, styles.borderBottom),
    item: classNames(styles.row, styles.item, {
      [styles.borderBottom]: !props?.final,
    }),
    headerCell: styles.headerCell,
    arrow: styles.arrow,
    addRow: styles.addRow,
    containerLine: styles.containerLine,
    addSegment: styles.addSegment,
    addSegmentSuperior: classNames(styles.addSegmentSuperior, styles.addSegment),
    messageEmpty: styles.emptyMessage,
  }
}

export {
  nestStyles,
}

export type { ItemProps }
