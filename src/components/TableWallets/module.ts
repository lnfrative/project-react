import classNames from 'classnames'
import { BackendWallet } from 'utilities/Interfaces'
import styles from './index.module.css'

interface WalletProps {
  final: boolean,
  wallet: BackendWallet,
}

function nestStyles(props?: WalletProps | undefined) {
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

export type { WalletProps }
