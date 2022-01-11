// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { PaginationTabProps } from 'interfaces'

// modules
import { getPath, nestStyles, onClick } from './module'
// endregion

function PaginationTab(props: PaginationTabProps) {
  const styles = nestStyles(props)
  return (
    <Link onClick={onClick(props)} to={getPath(props)} className={styles.tab}>
      {props.paginationObject.title}
    </Link>
  )
}

export default PaginationTab
