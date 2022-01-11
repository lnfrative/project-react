import { Stage, SelectOption } from 'utilities/Interfaces'
import { OnSelect } from 'utilities/Types'

interface State {
  optionSelected?: SelectOption
}

const initialState: State = {
  optionSelected: undefined,
}

function genOnSelect(stage: Stage<State>): OnSelect {
  return ({ option }) => {
    stage.commitState({ optionSelected: option })
  }
}

export {
  initialState,
  genOnSelect,
}
