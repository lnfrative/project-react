import { SelectOption } from '@/utilities/Interfaces'

interface SelectProps {
  options: Array<SelectOption>,
  title?: string,
  design: 'filled' | 'simple',
}

export default SelectProps
