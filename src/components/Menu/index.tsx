// region import
import React, { useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// utilities
import { MenuProps } from 'utilities/Interfaces'

// modules
import { initialState, onClick } from './module'

// styles
import styles from './style.css'
// endregion

function Menu(props: MenuProps) {
  const stage = useStage(initialState)

  useEffect(() => {
    if (!stage.state.isOpen) return () => {}
    function closeMenu() {
      stage.commitState({ isOpen: false })
    }
    window.addEventListener('click', closeMenu)
    return () => {
      window.removeEventListener('click', closeMenu)
    }
  }, [stage.state.isOpen])

  return (
    <div className={styles.container}>
      {stage.state.isOpen && props.content}
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
