// region import
import { MouseEventHandler } from 'react'

// utilities
import { PaginationTabProps } from 'interfaces'
// endregion

export function getPath(props: PaginationTabProps) {
	const { pathnameBase } = props
	const { id, main } = props.paginationObject
	if (main) {
		return pathnameBase
	}
	if (pathnameBase.slice(pathnameBase.length - 1) === '/') {
		return `${props.pathnameBase}${id}`
	}
	return `${props.pathnameBase}/${id}`
}

export function onClick(props: PaginationTabProps): MouseEventHandler<HTMLAnchorElement> {
	return e => {
		if (props.pathname === getPath(props) || props.paginationObject.disabled) {
			e.preventDefault()
		}
	}
}
