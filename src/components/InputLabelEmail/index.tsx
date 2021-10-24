// region import
import React from 'react'

// components
import { InputLabel } from '@/components'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { message } from '@/utilities'
import { InputLabelEmailProps } from '@/utilities/Interfaces'

// modules
import { onChange, initialState } from './module'
// endregion

function InputLabelEmail(props: InputLabelEmailProps) {
  const stage = useCommitState(initialState)
  return (
    <InputLabel
      inputProps={{
        error: props.disableError ? undefined : stage.state.error,
        InputHTMLAttributes: {
          type: 'email',
          name: 'email',
          onChange: onChange(stage, { registerInput: props.registerInput }),
        },
      }}
      title={message({ id: 'EMAIL' })}
    />
  )
}

export default InputLabelEmail
