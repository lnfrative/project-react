// region import
import React, { useContext, useEffect } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend } from 'contexts'

// components
import {
  FormAuth,
  InputLabelEmail,
  InputLabelPassword,
  Button,
  LinkForm,
} from 'components'

// utilties
import { message, resources, requestId } from 'utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './style.css'
// endregion

const endlogin = resources.endpoints.post.userCreateAccessToken

function FormAuthLogin() {
  const backend = useContext(Backend)
  const { register, handleSubmit, watch } = useForm()
  const { email, password } = watch
  const params = {
    email: email?.value,
    password: password?.value,
  }
  const response = backend.response.post({
    endpoint: endlogin,
    params,
  })
  const loading = backend.loading?.id === requestId('POST', endlogin, params)

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
      <Backdrop open={loading} sx={{ zIndex: 10 }}>
        <CircularProgress />
      </Backdrop>
    </form>
  )
}

export default FormAuthLogin
