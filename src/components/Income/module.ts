// interfaces
import { SelectOption, Stage } from 'interfaces'

// types
import { OnSelect } from 'types'

// utiltiies
import { fetcher, resources } from 'utilities'

// stores
import { store } from 'stores'

// actions
import {
	setSessionRevenueSummary,
	setSessionRevenueChart,
	setSessionIncomeOrigin,
	setSessionReturningAssets,
	setSessionAssetsAndRoi,
} from 'stores/SessionSlice'

interface State {
	optionSelectedRevenueChart?: SelectOption
	optionSelectedIncomOrigin?: SelectOption
}

export const options: SelectOption[] = [
	{
		id: 'today',
		value: 'Today',
	},
	{
		id: 'week',
		value: 'This week',
	},
	{
		id: 'month',
		value: 'This month',
	},
	{
		id: 'year',
		value: 'This year',
	},
	{
		id: 'all',
		value: 'All',
	},
]

export const initialState: State = {
	optionSelectedIncomOrigin: options[3],
	optionSelectedRevenueChart: options[3],
}

export function onSelectTimeChart(stage: Stage<State>): OnSelect {
	return values => {
		if (!values.assemble) {
			stage.commitState({ optionSelectedRevenueChart: values.option })
		}
	}
}

export function onSelectTimeOrigin(stage: Stage<State>): OnSelect {
	return values => {
		if (!values.assemble) {
			stage.commitState({ optionSelectedIncomOrigin: values.option })
		}
	}
}

// TODO: Cancel past promises if new ones are triggered during the flight.

export async function fetchRevenueSummary(params: Record<string, string>) {
	const { data } = await fetcher({
		url: resources.ep.api.get.revenueSummary,
		method: 'get',
		params,
	})

	if (data) {
		store.dispatch(setSessionRevenueSummary(data))
	}
}

export async function fetchRevenueChart(params: Record<string, string>) {
	store.dispatch(setSessionRevenueChart(undefined))
	const { data } = await fetcher({
		url: resources.ep.api.get.revenueChart,
		method: 'get',
		params,
	})

	if (data) {
		store.dispatch(setSessionRevenueChart(data))
	}
}

export async function fetchIncomeOrigin(params: Record<string, string>) {
	const id = JSON.stringify(params)

	store.dispatch(setSessionIncomeOrigin({
		status: 'loading',
		data: undefined,
		id,
	}))

	const { data, error } = await fetcher({
		url: resources.ep.api.get.incomeOrigin,
		method: 'get',
		params,
	})

	const state = store.getState()
	if (state.session.incomeOrigin.id === id) {
		store.dispatch(setSessionIncomeOrigin({
			id,
			data,
			error,
			status: 'loaded',
		}))
	}
}

export async function fetchAssetsAndRoi(params: Record<string, string>) {
	store.dispatch(setSessionAssetsAndRoi(undefined))
	const { data } = await fetcher({
		url: resources.ep.api.get.collateralAssetsAndROI,
		method: 'get',
		params,
	})

	if (data) {
		store.dispatch(setSessionAssetsAndRoi(data))
	}
}

export async function fetchReturningAssets(params: Record<string, string>) {
	store.dispatch(setSessionReturningAssets(undefined))
	const { data } = await fetcher({
		url: resources.ep.api.get.returningAssets,
		method: 'get',
		params,
	})

	if (data) {
		store.dispatch(setSessionReturningAssets(data))
	}
}