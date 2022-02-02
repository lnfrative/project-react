import { SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface SelectProps {
	options: Array<SelectOption>
	title?: string
	design: 'filled' | 'simple' | 'outlined'
	onSelect?: OnSelect
}

export default SelectProps
