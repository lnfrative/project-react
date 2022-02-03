import { SelectOption } from 'interfaces'

type OnSelect = (values: { option: SelectOption; assemble?: boolean }) => void

export default OnSelect
