import { FormEventHandler, useState } from 'react'
import { useStage } from 'hooks'
import { Stage } from 'interfaces'

function changeState(stage: Stage<{}>) {
	return (arg: { name: string }) => (value: string, hasError: boolean) => {
		stage.commitState({ [arg.name]: { value, hasError } })
	}
}

function parseState(stage: Stage<{}>) {
	return Object.assign(stage.state)
}

function handleSubmit(stage: Stage<{}>) {
	return (args: { onSubmit: Function }): FormEventHandler<HTMLFormElement> =>
		e => {
			if (e) {
				e.preventDefault()
			}
			args.onSubmit(stage.state)
		}
}

function bindInput(stage: Stage<Record<string, any>>, elements: HTMLInputElement[]) {
	return (values: { name: string }) => (element: HTMLInputElement) => {
		const listener = () => {
			stage.commitState({ [values.name]: element.value ?? '' })
		}
		if (element) {
			if (!element.getAttribute('listen')) {
				element.addEventListener('input', listener)
				element.setAttribute('listen', 'true')
				elements.push(element)
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
	const stage = useStage({})

	return {
		bind: bindInput(stage, elements),
		register: changeState(stage),
		watch: parseState(stage),
		handleSubmit: handleSubmit(stage),
		clearInputs: clear(elements),
	}
}

export default useForm
