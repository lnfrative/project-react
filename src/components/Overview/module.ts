// stores
import { store } from 'stores'

// actions
import { setSessionExcludeRewardTransactions } from 'stores/SessionSlice'

export function switchExcludeRewardMovements(value: boolean) {
	store.dispatch(setSessionExcludeRewardTransactions(value))
}