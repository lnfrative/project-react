import { Stage } from 'interfaces'
import { RangeKeyDict } from 'react-date-range'

interface State {
  types: number[]
  range: {
    startDate: Date,
    endDate: Date,
    key: string,
  }
}

export const initialState: State = {
  types: [],
  range: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
}

export function handleRanges(stage: Stage<State>) {
  return (ranges: RangeKeyDict) => {
    const { startDate, endDate, key } = ranges.selection
    if (startDate && endDate && key) {
      stage.commitState({
        ...stage.state,
        range: {
          startDate,
          endDate,
          key,
        }
      })
    }
  }
}

export function updateTypes(stage: Stage<State>, type: number) {
  return () => {
    stage.commitState({
      ...stage.state,
      types: stage.state.types.includes(type) ? stage.state.types.filter(t => t !== type) : stage.state.types.concat(type)
    })
  } 
}