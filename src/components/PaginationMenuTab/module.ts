// region import
import { MouseEventHandler } from 'react'
import classNames from 'classnames'

// styles
import { PaginationMenuTabProps } from 'utilities/Interfaces'

// styles
import styles from './index.module.css'
// endregion

function getPath(props: PaginationMenuTabProps) {
  const { id, main } = props.paginationObject
  return main ? props.pathnameBase : `${props.pathnameBase}/${id}`
}

function nestStyles(props: PaginationMenuTabProps) {
  const isCurrent = props.pathname === getPath(props)
  return {
    tab: classNames(styles.tab, {
      [styles.tabActive]: isCurrent,
    }),
  }
}

function onClick(props: PaginationMenuTabProps): MouseEventHandler<HTMLAnchorElement> {
  return (e) => {
    if (props.pathname === getPath(props)) {
      e.preventDefault()
    }
  }
}

export {
  nestStyles,
  onClick,
  getPath,
}
