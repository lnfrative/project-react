// region import
import React from 'react'

// components
import {
  GridForm,
  FormAuth,
  InputLabel,
  Button,
  CheckboxRhomboidTerms,
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
      <CheckboxRhomboidTerms />
      <Button title="Sign up" />
    </FormAuth>
  </GridForm>
)

export default Home
