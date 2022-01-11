import { Stage, PaginationObject } from 'utilities/Interfaces'
import { PaginationOnChange } from 'utilities/Types'

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
