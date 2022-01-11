// region import
import React from 'react'

// components
import { InputLabel } from 'components'

// hooks
import { useStage } from 'hooks'

// utilities
import { message } from 'utilities'
import { InputLabelEmailProps } from 'interfaces'

// modules
import { onChange, initialState } from './module'
// endregion

function InputLabelEmail(props: InputLabelEmailProps) {
  const stage = useStage(initialState)
  return (
    <InputLabel
      inputProps={{
        error: props.disableError ? undefined : stage.state.error,
        InputHTMLAttributes: {
          type: 'email',
          name: 'email',
          autoComplete: 'email',
          onChange: onChange(stage, { registerInput: props.registerInput }),
        },
      }}
      title={message({ id: 'EMAIL' })}
    />
  )
}

export default InputLabelEmail
