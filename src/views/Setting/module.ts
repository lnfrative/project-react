import { Stage, PaginationObject } from 'interfaces'
import { PaginationOnChange } from 'types'

interface State {
  paginationObjectSelected?: PaginationObject,
}

const initialState: State = {
  paginationObjectSelected: undefined,
}

function onChangePagination(stage: Stage<State>): PaginationOnChange {
  return (paginationObjectSelected) => {
    stage.commitState({ paginationObjectSelected })
  }
}

export {
  onChangePagination,
  initialState,
}
