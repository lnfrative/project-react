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
} from '@/components'

// module
import { initialState, onCheckTerms } from './module'
// endregion

function onSubmit() {}

function FormAuthRegister() {
  const stage = useCommitState(initialState)
  const { register, watch, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit({ onSubmit })}>
      <FormAuth title={message({ id: 'CREATE_AN_ACCOUNT' })}>
        <InputLabelEmail registerInput={register({ name: 'email' })} />
        <InputLabelPassword registerInput={register({ name: 'password' })} />
        <InputLabelPRepeat
          registerInput={register({ name: 'repeatedPassword' })}
          password={watch.password?.value}
        />
        <CheckboxRhomboidTerms
          checkboxRhomboidProps={{
            onCheck: onCheckTerms(stage),
          }}
        />
        <Button
          title={message({ id: 'SIGN_UP' })}
          buttonHTMLAttributes={{
            type: 'submit',
          }}
        />
      </FormAuth>
    </form>
  )
}

export default FormAuthRegister
