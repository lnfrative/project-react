import { SelectOption } from 'interfaces'

interface State {
	optionSelectedRevenueChart?: SelectOption
}

export const yearOptions: SelectOption[] = [
	{
		id: '2022',
		value: '2022',
		main: true,
	},
]

export const initialState: State = {}
