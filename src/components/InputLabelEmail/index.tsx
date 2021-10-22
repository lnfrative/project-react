// region import
import React from 'react'

// components
import { InputLabel } from '@/components'

// hooks
import { useCommitState } from '@/hooks'

// utilities
import { message } from '@/utilities'

// modules
import { onChange, initialState } from './module'
// endregion

function InputLabelEmail() {
  const stage = useCommitState(initialState)
  return (
    <InputLabel
      inputProps={{
        error: stage.state.error,
        InputHTMLAttributes: {
          type: 'email',
          onChange: onChange(stage),
        },
      }}
      title={message({ id: 'EMAIL' })}
    />
  )
}

export default InputLabelEmail
