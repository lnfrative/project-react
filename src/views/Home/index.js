// region import
import React from 'react'

// components
import {
  GridForm,
  FormAuth,
  InputLabel,
  Button,
  CheckboxRhomboid,
} from '@/components'

// styles
import styles from './styles.css'
// endregion

const Home = () => (
  <GridForm className={styles.container}>
    <FormAuth title="Create an account">
      <InputLabel title="Email" />
      <InputLabel title="Password" />
      <InputLabel title="Repeat Password" />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <CheckboxRhomboid />
        <div>test test</div>
      </div>
      <Button title="Sign up" />
    </FormAuth>
  </GridForm>
)

export default Home
