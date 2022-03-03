import { SelectOption, Stage } from 'interfaces'
import { OnSelect } from 'types'

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
		value: 'Week',
	},
	{
		id: 'month',
		value: 'Month',
	},
	{
		id: 'year',
		value: 'Year',
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
