import { ChangeEventHandler } from 'react'
import { Stage, Error, InputLabelPasswordProps } from 'interfaces'
import { invalidPassword, passwordNotMatch } from 'utilities/Errors'

interface InitialState {
	error: Error | undefined
}

function onChange(
	stage: Stage<InitialState>,
	arg: InputLabelPasswordProps
): ChangeEventHandler<HTMLInputElement> {
	return e => {
		const password = e.target.value
		const { confirm } = arg
		const isPassword = password.length > 11

		arg.registerInput(password, !isPassword)
		if ((isPassword && !!stage.state.error) || !password) {
			stage.commitState({ error: undefined })
			return
		}
		if (confirm && confirm !== password) {
			stage.commitState({ error: passwordNotMatch })
		}
		if (isPassword || confirm) return
		stage.commitState({ error: invalidPassword })
	}
}

const initialState: InitialState = {
	error: undefined,
}

export { initialState, onChange }
