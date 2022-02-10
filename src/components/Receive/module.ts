import { ContextBackend, ContextCaptchaState, SelectOption, Stage } from 'interfaces'
import { RefObject } from 'react'
import { OnSelect } from 'types'
import { resources } from 'utilities'

const endnewaddress = resources.endpoints.get.newaddress
const endaddresses = resources.endpoints.get.addresses

interface State {
	optionSelected?: SelectOption
}

const initialState: State = {
	optionSelected: undefined,
}

function selectReceive(stage: Stage<State>): OnSelect {
	return value => {
		stage.commitState({ optionSelected: value.option })
	}
}

function generateAddress(
	stage: Stage<State>,
	backend: ContextBackend,
	captcha: Stage<ContextCaptchaState>
) {
	return () => {
		if (stage.state.optionSelected?.id) {
			backend.request({
				method: 'get',
				endpoint: endnewaddress.replace(
					resources.endpoints.aliases.coinId,
					stage.state.optionSelected.id
				),
				params: {
					captcha_hash: captcha.state.hash ?? '',
				},
				updateCache: true,
			})

			backend.request({
				method: 'get',
				endpoint: endaddresses.replace(
					resources.endpoints.aliases.coinId,
					stage.state.optionSelected.id
				),
				updateCache: true,
			})
		}
	}
}

function copyAddressIntoClipboard(address: string, ref: RefObject<HTMLSpanElement>) {
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

export { initialState, selectReceive, generateAddress, copyAddressIntoClipboard }
