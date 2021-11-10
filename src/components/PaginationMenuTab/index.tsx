// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { PaginationMenuTabProps } from '@/utilities/Interfaces'

// modules
import { nestStyles, onClick, getPath } from './module'
// endregion

function PaginationMenuTab(props: PaginationMenuTabProps) {
  const styles = nestStyles(props)
  return (
    <Link onClick={onClick(props)} to={getPath(props)} className={styles.tab}>
      {props.paginationObject.title}
    </Link>
  )
}

export default PaginationMenuTab
