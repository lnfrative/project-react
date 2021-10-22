// region import
import React from 'react'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { message } from '@/utilities'

// components
import {
  FormAuth,
  InputLabel,
  Button,
  CheckboxRhomboidTerms,
} from '@/components'

// module
import { initialState, onCheckTerms } from './module'
// endregion

function FormAuthRegister() {
  const stage = useCommitState(initialState)

  return (
    <form>
      <FormAuth title={message({ id: 'CREATE_AN_ACCOUNT' })}>
        <InputLabel
          inputProps={{
            InputHTMLAttributes: {
              type: 'email',
            },
          }}
          title={message({ id: 'EMAIL' })}
        />
        <InputLabel
          inputProps={{
            InputHTMLAttributes: {
              type: 'password',
            },
          }}
          title={message({ id: 'PASSWORD' })}
        />
        <InputLabel
          inputProps={{
            InputHTMLAttributes: {
              type: 'password',
            },
          }}
          title={message({ id: 'REPÉAT_PASSWORD' })}
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
