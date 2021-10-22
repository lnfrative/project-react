import { ChangeEventHandler } from 'react'
import { Stage, Error } from '@/utilities/Interfaces'
import { invalidPassword } from '@/utilities/Errors'
import { regex } from '@/utilities'

interface InitialState {
  error: Error | undefined
}

function onChange(stage: Stage<InitialState>): ChangeEventHandler<HTMLInputElement> {
  return (e) => {
    const password = e.target.value
    const isPassword = regex.password.test(password)
    if ((isPassword && !!stage.state.error) || !password) {
      stage.commitState({ error: undefined })
      return
    }
    if (isPassword) return
    stage.commitState({ error: invalidPassword })
  }
}

const initialState: InitialState = {
  error: undefined,
}

export {
  initialState,
  onChange,
}
