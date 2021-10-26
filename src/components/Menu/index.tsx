// region import
import React from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { MenuProps } from '@/utilities/Interfaces'

// modules
import { initialState, onClick } from './module'

// styles
import styles from './style.css'
// endregion

function Menu(props: MenuProps) {
  const stage = useCommitState(initialState)

  return (
    <div className={styles.container}>
      {stage.state.isOpen && (
        <div className={styles.containerContent}>
          {props.content}
        </div>
      )}
      <div
        role="button"
        tabIndex={0}
        onClick={onClick(stage)}
        className={styles.children}
      >
        {props.children}
      </div>
    </div>
  )
}

export default Menu
