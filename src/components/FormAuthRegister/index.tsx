// region import
import React from 'react'

// hooks
import { useCommitState, useForm } from '@/hooks'

// utilities
import { message } from '@/utilities'

// components
import {
  FormAuth,
  Button,
  CheckboxRhomboidTerms,
  InputLabelEmail,
  InputLabelPassword,
  InputLabelPRepeat,
  AlreadyHaveAccount,
} from '@/components'

// module
import { initialState, onCheckTerms, onSubmit } from './module'
// endregion

function FormAuthRegister() {
  const stage = useCommitState(initialState)
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
        <AlreadyHaveAccount />
      </FormAuth>
    </form>
  )
}

export default FormAuthRegister
