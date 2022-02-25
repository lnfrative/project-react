import { PaginationObject } from 'interfaces'

interface State {
	paginationObjectMatch?: PaginationObject
	resizeObserver?: ResizeObserver
	tabsDisplayed?: number
}

const initialState: State = {
	paginationObjectMatch: undefined,
}

export { initialState }
