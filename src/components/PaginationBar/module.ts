import { PaginationObject } from 'interfaces'

interface State {
	paginationObjectMatch?: PaginationObject
}

const initialState: State = {
	paginationObjectMatch: undefined,
}

export { initialState }
