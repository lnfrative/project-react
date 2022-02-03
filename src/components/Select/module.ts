import classNames from 'classnames'
import { Stage, SelectOption, SelectProps } from 'interfaces'
import styles from './index.module.css'

interface InitialState {
	status?: 'open' | 'close'
	optionSelected?: SelectOption | undefined
}

const initialState: InitialState = {
	status: 'close',
	optionSelected: undefined,
}

function onSelect(stage: Stage<InitialState>, optionSelected: SelectOption, props: SelectProps) {
	return () => {
		stage.commitState({ optionSelected })

		if (!props.onSelect) return
		props.onSelect({ option: optionSelected })
	}
}

function nestStyles(arg: SelectProps) {
	return {
		optionSelected: classNames(styles.commonOption, styles[`${arg.design}Selected`]),
		option: classNames(styles.commonOption, styles.option),
		container: styles.container,
		groupOptions: styles.groupOptions,
		title: styles[`${arg.design}Title`],
		valueSelected: styles.valueSelected,
		optionValue: classNames(styles.optionValue, {
			[styles.orange]: arg.design !== 'outlined',
			[styles.purple]: arg.design === 'outlined',
		}),
		optionElement: styles.optionElement,
		optionSecondaryValue: styles.optionSecondaryValue,
		arrowIcon: classNames(styles.arrow, {
			[styles.left]: arg.design === 'outlined',
			[styles.right]: arg.design !== 'outlined',
		}),
	}
}

function onOpen(stage: Stage<InitialState>) {
	return () => stage.commitState({ status: 'open' })
}

export { initialState, onOpen, nestStyles, onSelect }
