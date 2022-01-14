// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// components
import { Banner } from 'components'

// utilities
import { resources } from 'utilities'

// interfaces
import { BackendUser } from 'interfaces'

// styles
import styles from './index.module.css'
// endregion

const enduser = resources.endpoints.get.user

function Banners() {
  const { response } = useContext(Backend)
  const user: BackendUser | undefined = response.get({ endpoint: enduser })?.data

  return (
    <div className={styles.container}>
      {user && !user.email_verified_at && (
        <Banner>
          <span>
            A verification email has been sent to
            {' '}
            <b>{user.email}</b>
            .
          </span>
        </Banner>
      )}
    </div>
  )
}

export default Banners
