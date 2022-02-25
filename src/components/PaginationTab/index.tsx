// region import
import React from 'react'

// utilities
import { PaginationTabProps } from 'interfaces'

// modules
import { getPath, onClick } from './module'

// styles
import { Content, StyledLink } from './style'
// endregion

function PaginationTab(props: PaginationTabProps) {
	return (
		<StyledLink onClick={onClick(props)} to={getPath(props)}>
			<Content componentProps={props}>{props.paginationObject.title}</Content>
		</StyledLink>
	)
}

export default PaginationTab
