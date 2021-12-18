// region import
import React, { useContext, useEffect } from 'react'

// hooks
import { useForm } from '@/hooks'

// contexts
import { Backend } from '@/contexts'

// components
import {
  FormAuth,
  InputLabelEmail,
  InputLabelPassword,
  Button,
  LinkForm,
} from '@/components'

// utilties
import { message, resources } from '@/utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './style.css'
// endregion

function FormAuthLogin() {
  const backend = useContext(Backend)
  const { register, handleSubmit, watch } = useForm()
  const response = backend.response.post({
    endpoint: resources.endpoints.post.userCreateAccessToken,
    params: {
      email: watch.email?.value,
      password: watch.password?.value,
    },
  })

  useEffect(() => {
    if (response?.success) {
      window.location.reload()
    }
  }, [response])

  return (
    <form onSubmit={handleSubmit({ onSubmit: onSubmit(backend) })}>
      <FormAuth title={message({ id: 'LOG_IN' })}>
        <InputLabelEmail disableError registerInput={register({ name: 'email' })} />
        <InputLabelPassword disableError registerInput={register({ name: 'password' })} />
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
