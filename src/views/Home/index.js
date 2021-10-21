// region import
import React from 'react'

// components
import { GridForm, InputLabel } from '@/components'

// styles
import styles from './styles.css'
// endregion

const Home = () => (
  <GridForm className={styles.container}>
    <InputLabel title="Username" />
  </GridForm>
)

export default Home
