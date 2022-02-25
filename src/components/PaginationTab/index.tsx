// region import
import React from 'react'

// utilities
import { PaginationTabProps } from 'interfaces'

// modules
import { getPath, onClick } from './module'

// styles
import { Link } from './style'
// endregion

function PaginationTab(props: PaginationTabProps) {
	return (
		<Link componentProps={props} onClick={onClick(props)} to={getPath(props)}>
			{props.paginationObject.title}
		</Link>
	)
}

export default PaginationTab
