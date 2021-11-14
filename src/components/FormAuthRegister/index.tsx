// region import
import React from 'react'

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
  const { register, watch, handleSubmit } = useForm()
  const { password, email, repeatedPassword } = watch

  return (
    <form onSubmit={handleSubmit({ onSubmit: onSubmit(stage) })}>
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
