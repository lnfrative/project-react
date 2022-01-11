// region import
import { MouseEventHandler } from 'react'
import classNames from 'classnames'

// utilities
import { PaginationTabProps } from 'utilities/Interfaces'

// styles
import styles from './style.css'
// endregion

function getPath(props: PaginationTabProps) {
  const { id, main } = props.paginationObject
  return main ? props.pathnameBase : `${props.pathnameBase}/${id}`
}

function nestStyles(props: PaginationTabProps) {
  const isCurrent = props.pathname === getPath(props)
  return {
    tab: classNames(styles.tab, {
      [styles.tabActive]: isCurrent,
    }),
  }
}

function onClick(props: PaginationTabProps): MouseEventHandler<HTMLAnchorElement> {
  return (e) => {
    if (props.pathname === getPath(props)) {
      e.preventDefault()
    }
  }
}

export {
  nestStyles,
  getPath,
  onClick,
}
