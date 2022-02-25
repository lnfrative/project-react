import { PaginationObject } from 'interfaces'

interface State {
	paginationObjectMatch?: PaginationObject
	resizeObserver?: ResizeObserver
}

const initialState: State = {
	paginationObjectMatch: undefined,
}

export { initialState }
