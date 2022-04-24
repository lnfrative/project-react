// interfaces
import { Stage, SelectOption, BackendBalance } from 'interfaces'

// types
import { OnSelect } from 'types'

// utilities
import { fetcher, resources } from 'utilities'

// stores
import { store } from 'stores'

// actions
import { setSessionBalance, setSessionBalanceId } from 'stores/SessionSlice'

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

export async function fetchBalanceWithParams(stage: Stage<State>, params: Record<string, string>) {
	const id = Math.random()
	store.dispatch(setSessionBalanceId(id))
	stage.commitState({ updatingBalanceWithParams: true })

	const { data } = await fetcher({
		url: resources.ep.api.get.userBalance,
		method: 'get',
		params
	})

	const signed = id === store.getState().session.balanceId
	if (signed && data) {
		store.dispatch(setSessionBalance(data))
		stage.commitState({ updatingBalanceWithParams: false })
	}
}