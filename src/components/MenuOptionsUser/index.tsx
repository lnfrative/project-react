// region import
import React from 'react'
import { Link } from 'react-router-dom'

// utilities
import { message, resources } from '@/utilities'
import { MenuOptionsUserProps } from '@/utilities/Interfaces'

// components
import {
  Menu,
  SVGIconSettings,
  SVGIconCheck,
  SVGIconBook,
  SVGIconLogout,
} from '@/components'

// styles
import styles from './style.css'
// endregion

function MenuOptionsUser(props: MenuOptionsUserProps) {
  return (
    <Menu
      content={(
        <div className={styles.menuContent}>
          <div className={styles.group}>
            <Link to={resources.path.setting} className={styles.containerOption}>
              <SVGIconSettings />
              <span className={styles.label}>
                {message({ id: 'SETTINGS' })}
              </span>
            </Link>
          </div>
          <div className={styles.group}>
            <div className={styles.containerOption}>
              <SVGIconCheck />
              <span className={styles.label}>
                {message({ id: 'MOVEMENT_HISTORY' })}
              </span>
            </div>
            <div className={styles.containerOption}>
              <SVGIconBook />
              <span className={styles.label}>
                {message({ id: 'ADDRESS_BOOK' })}
              </span>
            </div>
          </div>
          <div className={styles.containerOption}>
            <SVGIconLogout />
            <span className={styles.label}>
              {message({ id: 'SIGN_OUT' })}
            </span>
          </div>
        </div>
      )}
    >
      <div className={styles.container}>
        {props.character}
      </div>
    </Menu>
  )
}

export default MenuOptionsUser
