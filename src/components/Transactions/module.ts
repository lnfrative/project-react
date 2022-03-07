import { Stage, SelectOption } from 'interfaces'
import { RangeKeyDict } from 'react-date-range'
import { OnSelect } from 'types'

interface State {
  types: number[]
  range: {
    startDate: Date,
    endDate: Date,
    key: string,
  }
  coinSelected: SelectOption,
  pages: number[]
}

export const initialState: State = {
  types: [],
  range: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  },
  coinSelected: { id: 'all', value: 'All coins' },
  pages: [1],
}

export function handleSelect(stage: Stage<State>): OnSelect {
  return (values) => {
    if (!values.assemble) {
      stage.commitState({
        ...stage.state,
        coinSelected: values.option
      })
    }
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