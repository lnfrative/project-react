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
          <PaginationTab
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

export default PaginationBar
