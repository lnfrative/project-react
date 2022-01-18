// region import
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// utilities
import { PaginationMenuProps } from 'interfaces'

// components
import { PaginationMenuTab } from 'components'

// styles
import styles from './index.module.css'
// endregion

function PaginationMenu(props: PaginationMenuProps) {
	const { pathname } = useLocation()

	useEffect(() => {
		const [paginationObjectCurrent] = props.paginationObjects.filter(paginationObject => {
			const id = pathname.split('/').reverse()[0]
			return (id === props.pathParamId && paginationObject.main) || id === paginationObject.id
		})
		props.onChange(paginationObjectCurrent)
	}, [pathname])

	return (
		<div className={styles.container}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.tabs}>
				{props.paginationObjects.map(paginationObject => (
					<PaginationMenuTab
						key={paginationObject.id}
						paginationObject={paginationObject}
						pathnameBase={props.pathnameBase}
						pathname={pathname}
					/>
				))}
			</div>
		</div>
	)
}

export default PaginationMenu
