// region import
import React, { MouseEventHandler, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { PaginationBarProps, PaginationObject } from '@/utilities/Interfaces'

// modules
import { initialState } from './module'

// styles
import styles from './style.css'
// endregion

function PaginationBar(props: PaginationBarProps) {
  const stage = useCommitState(initialState)
  const { pathname } = useLocation()

  useEffect(() => {
    const [paginationObjectCurrent] = props.paginationObjects.filter((paginationObject) => {
      const id = pathname.split('/').reverse()[0]
      return (
        (id === props.pathParamId && paginationObject.main)
        || (id === paginationObject.id)
      )
    })
    stage.commitState({ paginationObjectMatch: paginationObjectCurrent })
  }, [pathname])

  return (
    <div className={styles.container}>
      <div className={styles.containerBar}>
        {props.paginationObjects.map((paginationObject) => (
          <Tab
            key={paginationObject.id}
            paginationObject={paginationObject}
            pathnameBase={props.pathnameBase}
            pathname={pathname}
          />
        ))}
      </div>
      {stage.state.paginationObjectMatch?.content}
    </div>
  )
}

function Tab(
  props: {
    paginationObject: PaginationObject, pathnameBase: string, pathname: string,
  },
) {
  const { id, title, main } = props.paginationObject
  const to = main ? props.pathnameBase : `${props.pathnameBase}/${id}`
  const isCurrent = props.pathname === to

  const preventClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (isCurrent) {
      e.preventDefault()
    }
  }

  return (
    <Link onClick={preventClick} to={to} className={styles.tab}>
      {title}
    </Link>
  )
}

export default PaginationBar
