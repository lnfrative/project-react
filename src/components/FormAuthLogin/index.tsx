// region import
import React from 'react'

// hooks
import { useForm } from '@/hooks'

// components
import {
  FormAuth,
  InputLabelEmail,
  InputLabelPassword,
  Button,
  LinkForm
} from '@/components'

// utilties
import { message, resources } from '@/utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './style.css'
// endregion

function FormAuthLogin() {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit({ onSubmit })}>
      <FormAuth title={message({ id: 'LOG_IN' })}>
        <InputLabelEmail registerInput={register({ name: 'email' })} />
        <InputLabelPassword registerInput={register({ name: 'password' })} />
        <div className={styles.forgotPassword}>{message({ id: 'FORGOT_PASSWORD' })}</div>
        <Button
          buttonHTMLAttributes={{
            type: 'submit',
          }}
          title={message({ id: 'LOG_IN' })}
        />
        <LinkForm
          path={resources.path.signup}
          message={message({ id: 'DONT_HAVE_ACCOUNT' })}
          linkName={message({ id: 'SIGN_UP' })}
        />
      </FormAuth>
    </form>
  )
}

export default FormAuthLogin
