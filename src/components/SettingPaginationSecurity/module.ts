import { Stage } from 'interfaces'

interface State {
	enable2FA: boolean
}

export const initialState: State = {
	enable2FA: false,
}

export function enableTwoFactor(stage: Stage<State>) {
	return () => {
		stage.commitState({
			enable2FA: true
		})
	}
}

export function closeEnable2FA(stage: Stage<State>) {
	return () => {
		stage.commitState({
			enable2FA: false
		})
	}
}
