// interfaces
import { Stage } from 'interfaces'

interface State {
	excludeRewardMovements: boolean
}

export const initialState: State = {
	excludeRewardMovements: true,
}

export function switchExcludeRewardMovements(stage: Stage<State>) {
	return (value: boolean) => {
		stage.commitState({
			excludeRewardMovements: value,
		})
	}
}