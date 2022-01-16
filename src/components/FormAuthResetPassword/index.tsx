// region import
import React, { useContext } from 'react'
import { useLocation, Redirect } from 'react-router-dom'

// hooks
import { useForm } from 'hooks'

// contexts
import { Backend } from 'contexts'

// components
import {
  FormAuth,
  InputLabelPassword,
  InputLabelPRepeat,
  Button,
  BackdropLoader,
} from 'components'

// utilities
import { message, requestId, resources } from 'utilities'

// modules
import { onSubmit } from './module'
// endregion

const endresetpassword = resources.endpoints.post.resetPassword

function FormAuthResetPassword() {
  const backend = useContext(Backend)
  const { register, handleSubmit, watch } = useForm()

  const { search } = useLocation()
  const urlSearchParams = new URLSearchParams(search)
  const email = urlSearchParams.get('email') ?? ''
  const token = urlSearchParams.get('token') ?? ''
  const password = watch.password?.value
  const passwordRepeat = watch.passwordRepeat?.value

  const params = {
    token,
    email,
    password,
    password_confirmation: passwordRepeat,
  }

  const loading = backend.loading?.id === requestId('post', endresetpassword, params)
  const response = backend.response.post({ endpoint: endresetpassword, params })

  if (response?.success) return <Redirect to={resources.routes.login.route.path} />
  if (!email && !token) return <Redirect to={resources.routes.home.route.path} />
  return (
    <form onSubmit={handleSubmit({ onSubmit: onSubmit(backend, params) })}>
      <FormAuth title="Reset Password">
        <InputLabelPassword
          registerInput={register({ name: 'password' })}
        />
        <InputLabelPRepeat
          password={password}
          registerInput={register({ name: 'passwordRepeat' })}
        />
        <Button
          buttonHTMLAttributes={{
            type: 'submit',
          }}
          title={message({ id: 'SEND' })}
        />
      </FormAuth>
      <BackdropLoader open={loading} />
    </form>
  )
}

export default FormAuthResetPassword
