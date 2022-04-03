import { FormEventHandler, useState } from 'react'
import { useStage } from 'hooks'
import { Stage, FormRecordBinded } from 'interfaces'

type State = Record<string, FormRecordBinded>

const initialState: State = {}

function parseState(stage: Stage<State>) {
	return Object.assign(stage.state)
}

function handleSubmit(stage: Stage<State>) {
	return (args: { onSubmit: Function }): FormEventHandler<HTMLFormElement> =>
		e => {
			if (e) {
				e.preventDefault()
				e.stopPropagation()
			}
			args.onSubmit(stage.state)
		}
}

function bindInput(stage: Stage<State>, elements: HTMLInputElement[]) {
	return (values: { name: string }) => (instance: HTMLInputElement | null) => {
		const listener = () => {
			stage.commitState({
				[values.name]: {
					value: instance?.value ?? '',
					input: instance,
				},
			})
		}
		if (instance) {
			if (!instance.getAttribute('listen')) {
				instance.addEventListener('input', listener)
				instance.setAttribute('listen', 'true')
				elements.push(instance)
			}
		}
	}
}

function clear(elements: HTMLInputElement[]) {
	return () => {
		elements.forEach(element => {
			const el = element
			el.value = ''
		})
	}
}

function useForm() {
	const [elements] = useState<HTMLInputElement[]>([])
	const stage = useStage(initialState)

	return {
		bind: bindInput(stage, elements),
		watch: parseState(stage),
		handleSubmit: handleSubmit(stage),
		clearInputs: clear(elements),
	}
}

export default useForm
