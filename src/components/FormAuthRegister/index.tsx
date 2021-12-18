// region import
import React, { useContext, useEffect } from 'react'

// contexts
import { Backend } from '@/contexts'

// hooks
import { useStage, useForm } from '@/hooks'

// utilities
import { message, resources } from '@/utilities'

// components
import {
  FormAuth,
  Button,
  CheckboxRhomboidTerms,
  InputLabelEmail,
  InputLabelPassword,
  InputLabelPRepeat,
  LinkForm,
} from '@/components'

// module
import { initialState, onCheckTerms, onSubmit } from './module'
// endregion

function FormAuthRegister() {
  const stage = useStage(initialState)
  const backend = useContext(Backend)
  const { register, watch, handleSubmit } = useForm()
  const { password, email, repeatedPassword } = watch
  const userResponse = backend.response.get({ endpoint: resources.endpoints.get.user })
  const createUserResponse = backend.response.post({
    endpoint: resources.endpoints.post.user,
    params: {
      email: email?.value,
      password: password?.value,
    },
  })

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
    </form>
  )
}

export default FormAuthRegister
