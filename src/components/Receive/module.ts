// region import
import { RefObject } from 'react'

// interfaces
import { SelectOption, Stage } from 'interfaces'

// types
import { OnSelect } from 'types'

// utilities
import { fetchNewAddress } from 'utilities/fetcher'
// endregion

interface State {
	optionSelected?: SelectOption
}

export const initialState: State = {
	optionSelected: undefined,
}

export function selectReceive(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

export function generateAddress(stage: Stage<State>) {
	return () => {
		if (stage.state.optionSelected?.id) {
			fetchNewAddress(stage.state.optionSelected.id)
		}
	}
}

export function copyAddressIntoClipboard(address: string, ref: RefObject<HTMLSpanElement>) {
	return () => {
		if (ref.current) {
			const range = document.createRange()
			range.selectNode(ref.current)
			window.getSelection()?.removeAllRanges()
			window.getSelection()?.addRange(range)
			if (navigator.clipboard) {
				navigator.clipboard.writeText(address)
			} else {
				document.execCommand('copy')
			}
		}
	}
}
