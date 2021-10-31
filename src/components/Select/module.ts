import classNames from 'classnames'
import { Stage, SelectOption } from '@/utilities/Interfaces'
import styles from './style.css'

interface InitialState {
  status?: 'open' | 'close',
  optionSelected?: SelectOption | undefined,
}

const initialState: InitialState = {
  status: 'close',
  optionSelected: undefined,
}

function onSelect(stage: Stage<InitialState>, optionSelected: SelectOption) {
  return () => {
    stage.commitState({ optionSelected })
  }
}

function nestStyles() {
  return {
    optionSelected: classNames(styles.commonOption, styles.selected),
    option: classNames(styles.commonOption, styles.option),
    container: styles.container,
    groupOptions: styles.groupOptions,
    title: styles.title,
    valueSelected: styles.valueSelected,
  }
}

function onOpen(stage: Stage<InitialState>) {
  return () => stage.commitState({ status: 'open' })
}

export {
  initialState,
  onOpen,
  nestStyles,
  onSelect,
}
