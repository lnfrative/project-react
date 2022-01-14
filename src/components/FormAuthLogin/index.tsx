// region import
import React, { useContext, useEffect } from 'react'

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
  BackdropLoader,
} from 'components'

// utilties
import { message, resources, requestId } from 'utilities'

// modules
import { onSubmit } from './module'

// styles
import styles from './index.module.css'
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
  const loading = backend.loading?.id === requestId('post', endlogin, params)

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
          path={resources.routes.register.base}
          message={message({ id: 'DONT_HAVE_ACCOUNT' })}
          linkName={message({ id: 'SIGN_UP' })}
        />
      </FormAuth>
      <BackdropLoader open={loading} />
    </form>
  )
}

export default FormAuthLogin
