// region import
import React, { useContext, useEffect } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'

// contexts
import { Backend } from 'contexts'

// hooks
import { useStage, useForm } from 'hooks'

// utilities
import { message, resources, requestId } from 'utilities'

// components
import {
  FormAuth,
  Button,
  CheckboxRhomboidTerms,
  InputLabelEmail,
  InputLabelPassword,
  InputLabelPRepeat,
  LinkForm,
} from 'components'

// module
import { initialState, onCheckTerms, onSubmit } from './module'

// styles
import styles from './index.module.css'
// endregion

const enduser = resources.endpoints.get.user
const endregister = resources.endpoints.post.user

function FormAuthRegister() {
  const stage = useStage(initialState)
  const backend = useContext(Backend)
  const { register, watch, handleSubmit } = useForm()
  const { password, email, repeatedPassword } = watch
  const params = {
    email: email?.value,
    password: password?.value,
  }
  const userResponse = backend.response.get({ endpoint: enduser })
  const createUserResponse = backend.response.post({
    endpoint: endregister,
    params,
  })
  const loading = backend.loading?.id === requestId('post', endregister, params)

  useEffect(() => {
    if (userResponse?.success || createUserResponse?.success) {
      document.location.href = '/'
    }
  }, [userResponse, createUserResponse])

  return (
    <form onSubmit={handleSubmit({ onSubmit: onSubmit(backend, stage) })}>
      <FormAuth title={message({ id: 'CREATE_AN_ACCOUNT' })}>
        <InputLabelEmail registerInput={register({ name: 'email' })} />
        <InputLabelPassword registerInput={register({ name: 'password' })} />
        <InputLabelPRepeat
          registerInput={register({ name: 'repeatedPassword' })}
          password={password?.value}
        />
        <CheckboxRhomboidTerms
          checkboxRhomboidProps={{
            onCheck: onCheckTerms(stage),
          }}
        />
        <Button
          title={message({ id: 'SIGN_UP' })}
          buttonHTMLAttributes={{
            disabled: (
              !stage.state.termsAccepted
              || password?.hasError
              || email?.hasError
              || repeatedPassword?.hasError
            ),
            type: 'submit',
          }}
        />
        <LinkForm
          path={resources.path.login}
          message={message({ id: 'ALREADY_HAVE_ACCUONT' })}
          linkName={message({ id: 'LOG_IN' })}
        />
      </FormAuth>
      <Backdrop open={loading} sx={{ zIndex: 10 }}>
        <div className={styles.loader}>
          <CircularProgress />
          <div className={styles.loaderMessage}>{message({ id: 'LONG_TIME_ACTION' })}</div>
        </div>
      </Backdrop>
    </form>
  )
}

export default FormAuthRegister
