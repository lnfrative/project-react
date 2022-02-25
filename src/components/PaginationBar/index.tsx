// region import
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// hooks
import { useStage } from 'hooks'

// components
import { PaginationTab } from 'components'

// utilities
import { PaginationBarProps } from 'interfaces'

// modules
import { initialState } from './module'

// styles
import styles from './index.module.css'
// endregion

function PaginationBar(props: PaginationBarProps) {
	const stage = useStage(initialState)
	const { pathname } = useLocation()

	// TODO: See if the dynamic responsive menu will be needed on another site.
	// useEffect(() => {
	// 	const resizeObserver = new ResizeObserver(entries => {
	// 		// const { target } = entries[0]
	// 		// const children = Array.prototype.slice.call(target.children)
	// 		//
	// 		// let tabsWidth = 0
	// 		// children.forEach(el => {
	// 		// 	tabsWidth += el.clientWidth
	// 		// })
	// 		// console.log('tabsWidth', tabsWidth, 'width', target.clientWidth)
	// 	})
	//
	// 	if (containerBarRef.current) {
	// 		resizeObserver.observe(containerBarRef.current)
	// 		stage.commitState({
	// 			resizeObserver,
	// 		})
	// 	}
	//
	// 	return () => {
	// 		resizeObserver.disconnect()
	// 	}
	// }, [])

	useEffect(() => {
		const [paginationObjectCurrent] = props.paginationObjects.filter(paginationObject => {
			const id = pathname === '/' ? pathname : pathname.split('/').reverse()[0]
			return (id === props.pathParamId && paginationObject.main) || id === paginationObject.id
		})
		stage.commitState({ paginationObjectMatch: paginationObjectCurrent })
	}, [pathname])

	return (
		<div className={styles.container}>
			<div className={styles.containerBar}>
				{props.paginationObjects.map(paginationObject => (
					<div key={paginationObject.id} className={styles.tab}>
						<PaginationTab
							paginationObject={paginationObject}
							pathnameBase={props.pathnameBase}
							pathname={pathname}
						/>
					</div>
				))}
			</div>
			{stage.state.paginationObjectMatch?.content}
		</div>
	)
}

export default PaginationBar
