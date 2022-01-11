import { PaginationBarProps } from 'utilities/Interfaces'
import { PaginationOnChange } from 'utilities/Types'

interface PaginationMenuProps extends PaginationBarProps {
  title: string,
  onChange: PaginationOnChange,
}

export default PaginationMenuProps
