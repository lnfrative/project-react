import { ChangeEventHandler } from 'react'
import { Stage, Error, InputLabelPRepeatProps } from '@/utilities/Interfaces'
import { passwordNotMatch } from '@/utilities/Errors'

interface InitialState {
  error: Error | undefined,
}

const initialState: InitialState = {
  error: undefined,
}

function onChange(
  stage: Stage<InitialState>, args: InputLabelPRepeatProps,
): ChangeEventHandler<HTMLInputElement> {
  return (e) => {
    const repeatedPassword = e.target.value
    const isMatch = repeatedPassword === args.password

    args.registerInput(repeatedPassword, !isMatch)
    if ((isMatch && !!stage.state.error) || !repeatedPassword) {
      stage.commitState({ error: undefined })
      return
    }
    if (isMatch) return
    stage.commitState({ error: passwordNotMatch })
  }
}

export {
  initialState,
  onChange,
}
