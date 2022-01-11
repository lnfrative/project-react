// region import
import React from 'react'

// utilities
import { message } from 'utilities'
import { InputProps } from 'utilities/Interfaces'

// module
import { nestStyles } from './module'
// endregion

function Input(props: InputProps) {
  const style = nestStyles({ error: props.error })
  return (
    <div className={style.container}>
      {!!props.error?.data?.message && (
        <div className={style.errorContainer}>
          <span className={style.errorSign}>{props.error.sign}</span>
          <span className={style.errorMessage}>{message({ id: props.error.data.message })}</span>
        </div>
      )}
      <input {...props.InputHTMLAttributes} className={style.input} />
    </div>
  )
}

export default Input
