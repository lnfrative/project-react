// interfaces
import { SelectOption, Stage } from 'interfaces'

// types
import { OnSelect } from 'types'

// stores
import { store } from 'stores'

// fetcher
import { postTransaction, fetchBalance, fetchLastTransactions, fetchWallets } from 'utilities/fetcher'

interface State {
	optionSelected?: SelectOption
	status?: 'clear' | 'completed'
}

const initialState: State = {
	optionSelected: undefined,
	status: 'clear',
}

function selectSend(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

function onSubmit(stage: Stage<State>, params: Record<string, any>) {
	return () => {
		const { optionSelected } = stage.state
		if (optionSelected) {
			postTransaction(optionSelected.id, params)
		}
	}
}

function success(stage: Stage<State>, successCallback: Function) {
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

function resetStatus(stage: Stage<State>) {
	return () => {
		stage.commitState({ status: 'clear' })
	}
}

export { initialState, selectSend, onSubmit, success, resetStatus }
