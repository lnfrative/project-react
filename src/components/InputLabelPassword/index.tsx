// region import
import React from 'react'

// utilities
import { message } from '@/utilities'

// hooks
import { useCommitState } from '@/hooks'

// components
import { InputLabel } from '@/components'

// modules
import { initialState, onChange } from './module'
// endregion

function InputLabelPassword() {
  const stage = useCommitState(initialState)
  return (
    <InputLabel
      inputProps={{
        error: stage.state.error,
        InputHTMLAttributes: {
          type: 'password',
          onChange: onChange(stage),
        },
      }}
      title={message({ id: 'PASSWORD' })}
    />
  )
}

export default InputLabelPassword
