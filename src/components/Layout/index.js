import React from 'react'

// components
import { Header } from '@/components'

// styles
import styles from './styles.css'

const Layout = ({ children = null }) => (
  <div className={styles.container}>
    <Header />
    {children}
  </div>
)

export default Layout
