// interfaces
import { Stage } from 'interfaces'

// stores
import { store } from 'stores'

// actions
import {
	setSessionSummary,
	setSessionWallets,
	setSessionTransactions,
} from 'stores/SessionSlice'

// utilities
import { fetcher, resources } from 'utilities'

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

export async function fetchSummary() {
	const { data } = await fetcher({
		url: resources.ep.api.get.summary,
		method: 'get',
	})

	if (data) {
		store.dispatch(setSessionSummary(data))
	}
}

export async function fetchWallets() {
	const { data } = await fetcher({
		url: resources.ep.api.get.wallets,
		method: 'get',
	})

	if (data) {
		store.dispatch(setSessionWallets(data))
	}
}

export async function fetchTransactions(params: Record<string, any>) {
	const { data } = await fetcher({
		url: resources.ep.api.get.transactions,
		method: 'get',
	})

	if (data) {
		store.dispatch(setSessionTransactions(data))
	}
}