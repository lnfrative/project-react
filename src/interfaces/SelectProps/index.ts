import { SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface SelectProps {
	options: Array<SelectOption>
	title?: string
	design: 'filled' | 'simple'
	onSelect?: OnSelect
}

export default SelectProps
