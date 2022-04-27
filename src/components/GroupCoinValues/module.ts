// interfaces
import { Stage, SelectOption, BackendBalance } from 'interfaces'

// types
import { OnSelect } from 'types'

interface State {
	variation?: SelectOption
	currency?: SelectOption
	coin?: SelectOption
	backendBalance?: BackendBalance
	updatingBalanceWithParams?: boolean
}

export const initialState: State = {
	variation: undefined,
	currency: undefined,
	coin: undefined,
}

export function selectCoin(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({ coin: option })
		}
	}
}

export function selectTime(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({ variation: option })
		}
	}
}