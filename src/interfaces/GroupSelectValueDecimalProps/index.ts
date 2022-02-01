import { SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface GroupSelectValueDecimalProps {
	titleSelect: string
	valueDecimal: number
	optionsSelect: Array<SelectOption>
	onSelect?: OnSelect
}

export default GroupSelectValueDecimalProps
