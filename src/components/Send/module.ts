// interfaces
import { SelectOption, Stage } from 'interfaces'

// types
import { OnSelect } from 'types'

// stores
import { store } from 'stores'

// actions
import { setSessionTransactionPosted } from 'stores/SessionSlice'

// fetcher
import { postTransaction, fetchBalance, fetchLastTransactions, fetchWallets } from 'utilities/fetcher'

interface State {
	optionSelected?: SelectOption
	status?: 'clear' | 'completed'
}

export const initialState: State = {
	optionSelected: undefined,
	status: 'clear',
}

export function selectSend(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

export function onSubmit(stage: Stage<State>, params: Record<string, any>) {
	return () => {
		const { optionSelected } = stage.state
		if (optionSelected) {
			postTransaction(optionSelected.id, params)
		}
	}
}

export function success(stage: Stage<State>, successCallback: Function) {
	return () => {
		const state = store.getState()
		successCallback()
		stage.commitState({ status: 'completed' })
		fetchBalance()
		fetchWallets()
		fetchLastTransactions({
			types: state.session.excludeRewardTransactions ? '1,3,4' : '1,2,3,4,5',
			perPage: 5,
		})
	}
}

export function resetStatus(stage: Stage<State>) {
	return () => {
		const { optionSelected } = stage.state
		if (optionSelected) {
			const coinId = optionSelected.id
			store.dispatch(setSessionTransactionPosted({
				[coinId]: {
					status: 'nonload',
					data: null,
					id: undefined,
				}
			}))
		}
		stage.commitState({ status: 'clear' })
	}
}

