import { ChangeEventHandler } from 'react'
import { Stage, Error } from '@/utilities/Interfaces'
import { regex } from '@/utilities'
import { invalidEmail } from '@/utilities/Errors'

interface InitialState {
  error: Error | undefined,
}

const initialState: InitialState = {
  error: undefined,
}

function onChange(stage: Stage<InitialState>): ChangeEventHandler<HTMLInputElement> {
  return (e) => {
    const email = e.target.value
    const isEmail = regex.email.test(email)
    if ((isEmail && !!stage.state.error) || !email) {
      stage.commitState({ error: undefined })
      return
    }
    if (isEmail) return
    stage.commitState({ error: invalidEmail })
  }
}

export {
  onChange,
  initialState,
}