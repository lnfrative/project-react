// region import
import React, { InputHTMLAttributes } from 'react'

// utilities
import { Error } from '@/utilities/interfaces'

// module
import { nestStyles } from './module'
// endregion

function Input(props: {
  error: Error,
  InputHTMLAttributes: InputHTMLAttributes<HTMLInputElement>
}) {
  const style = nestStyles({ error: props.error })
  return (
    <div className={style.container}>
      {!!props.error?.data?.message && (
        <div className={style.errorContainer}>
          <span className={style.errorSign}>{props.error.sign}</span>
          <span className={style.errorMessage}>{props.error.data.message}</span>
        </div>
      )}
      <input {...props.InputHTMLAttributes} className={style.input} />
    </div>
  )
}

export default Input
