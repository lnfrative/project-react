import { PaginationBarProps } from 'interfaces'
import { PaginationOnChange } from 'types'

interface PaginationMenuProps extends PaginationBarProps {
	title: string
	onChange: PaginationOnChange
}

export default PaginationMenuProps
