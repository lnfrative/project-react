// region import
import React, { useEffect } from 'react'
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
    <div className={styles.containerBar}>
      {props.paginationObjects.map((paginationObject) => (
        <Tab key={paginationObject.id} paginationObject={paginationObject} pathname={pathname} />
      ))}
    </div>
  )
}

function Tab(props: { paginationObject: PaginationObject, pathname: string }) {
  const { id, title, main } = props.paginationObject
  const to = main ? props.pathname : `${props.pathname}/${id}`
  return (
    <Link onClick={(e) => e.preventDefault()} to={to} className={styles.tab}>
      {title}
    </Link>
  )
}

export default PaginationBar
