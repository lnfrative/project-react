import { PaginationObject } from '@/utilities/Interfaces'

interface State {
  paginationObjectMatch?: PaginationObject
}

const initialState: State = {
  paginationObjectMatch: undefined,
}

export {
  initialState,
}
