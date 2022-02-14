// region import
import { MouseEventHandler } from 'react'
import classNames from 'classnames'

// utilities
import { PaginationTabProps } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

function getPath(props: PaginationTabProps) {
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

function nestStyles(props: PaginationTabProps) {
	const isCurrent = props.pathname === getPath(props)
	return {
		tab: classNames(styles.tab, {
			[styles.tabActive]: isCurrent,
			[styles.disabled]: props.paginationObject.disabled,
		}),
	}
}

function onClick(props: PaginationTabProps): MouseEventHandler<HTMLAnchorElement> {
	return e => {
		if (props.pathname === getPath(props) || props.paginationObject.disabled) {
			e.preventDefault()
		}
	}
}

export { nestStyles, getPath, onClick }
