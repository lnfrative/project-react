// interfaces
import { Stage, SelectOption, BackendBalance } from 'interfaces'

// types
import { OnSelect } from 'types'

export const coinOptions = [
	{ id: 'btc', value: 'BTC' },
	{ id: 'ltc', value: 'LTC' },
	{ id: 'eth', value: 'ETH' },
]

export const timeOptions = [
	{ id: '24h', value: '24 hours' },
	{ id: '7d', value: '7 days' },
	{ id: '14d', value: '14 days' },
	{ id: '30d', value: '30 days' },
	{ id: '1y', value: '1 year' },
]

interface State {
	variation: SelectOption
	currency?: SelectOption
	coin: SelectOption
	backendBalance?: BackendBalance
	updatingBalanceWithParams?: boolean
}

export const initialState: State = {
	variation: { id: '24h', value: '24 hours' },
	currency: undefined,
	coin: { id: 'btc', value: 'BTC' },
}

export function selectCoin(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({
				...stage.state,
				coin: option
			})
		}
	}
}

export function selectTime(stage: Stage<State>): OnSelect {
	return ({ option, assemble }) => {
		if (!assemble) {
			stage.commitState({
				...stage.state,
				variation: option
			})
		}
	}
}