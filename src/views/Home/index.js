// region import
import React from 'react'

// components
import { GridForm, Input } from '@/components'

// styles
import styles from './styles.css'
// endregion

const Home = () => (
  <GridForm className={styles.container}>
    <Input
      error={{ data: { message: 'Email already in use' }, sign: '*' }}
      InputHTMLAttributes={{
        name: 'test',
        id: 'test',
      }}
    />
  </GridForm>
)

export default Home
