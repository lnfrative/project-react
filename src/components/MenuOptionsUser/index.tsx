// region import
import React from 'react'

// components
import { Menu } from '@/components'

// styles
import styles from './style.css'
// endregion

function MenuOptionsUser() {
  return (
    <Menu
      content={(
        <div>
          <div>Hola</div>
          <div>Hola</div>
          <div>Hola</div>
          <div>Hola</div>
        </div>
      )}
    >
      <div className={styles.container}>
        S
      </div>
    </Menu>
  )
}

export default MenuOptionsUser
