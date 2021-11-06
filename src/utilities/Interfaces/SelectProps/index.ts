import { SelectOption } from '@/utilities/Interfaces'
import { OnSelect } from '@/utilities/Types'

interface SelectProps {
  options: Array<SelectOption>,
  title?: string,
  design: 'filled' | 'simple',
  onSelect?: OnSelect,
}

export default SelectProps
