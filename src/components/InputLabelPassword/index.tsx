// region import
import React from 'react'

// utilities
import { message } from '@/utilities'
import { InputLabelPasswordProps } from '@/utilities/Interfaces'

// hooks
import { useStage } from '@/hooks'

// components
import { InputLabel } from '@/components'

// modules
import { initialState, onChange } from './module'
// endregion

function InputLabelPassword(props: InputLabelPasswordProps) {
  const stage = useStage(initialState)
  return (
    <InputLabel
      inputProps={{
        error: props.disableError ? undefined : stage.state.error,
        InputHTMLAttributes: {
          type: 'password',
          name: 'password',
          autoComplete: 'current-password',
          onChange: onChange(stage, props),
        },
      }}
      title={message({ id: 'PASSWORD' })}
    />
  )
}

export default InputLabelPassword
