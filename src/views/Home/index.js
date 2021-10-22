// region import
import React from 'react'

// components
import {
  GridForm,
  FormAuthRegister,
} from '@/components'

// styles
import styles from './styles.css'
// endregion

const Home = () => (
  <GridForm className={styles.container}>
    <FormAuthRegister />
  </GridForm>
)

export default Home
