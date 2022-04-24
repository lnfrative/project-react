import { SelectOption } from 'interfaces'
import { OnSelect } from 'types'

interface GroupSelectValueVariationProps {
	titleSelect: string
	optionsSelect: Array<SelectOption>
	valueVariation: number
	onSelect?: OnSelect
	loading?: boolean
}

export default GroupSelectValueVariationProps
