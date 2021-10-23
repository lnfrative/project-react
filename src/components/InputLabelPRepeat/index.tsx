// region import
import React from 'react'

// utilities
import { message } from '@/utilities'
import { InputLabelPRepeatProps } from '@/utilities/Interfaces'

// components
import { InputLabel } from '@/components'

// hooks
import { useCommitState } from '@/hooks'

// modules
import { initialState, onChange } from './module'
// endregion

function InputLabelPRepeat(props: InputLabelPRepeatProps) {
  const stage = useCommitState(initialState)
  return (
    <InputLabel
      inputProps={{
        error: stage.state.error,
        InputHTMLAttributes: {
          type: 'password',
          onChange: onChange(stage, { password: props.password }),
        },
      }}
      title={message({ id: 'REPEAT_PASSWORD' })}
    />
  )
}

export default InputLabelPRepeat
