import { FormEventHandler } from 'react'
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

function bindInput(stage: Stage<Record<string, any>>) {
	return (values: { name: string }) => (element: HTMLInputElement) => {
		const listener = () => {
			stage.commitState({ [values.name]: element.value ?? '' })
		}
		if (element) {
			if (!element.getAttribute('listen')) {
				element.addEventListener('input', listener)
				element.setAttribute('listen', 'true')
			}
		}
	}
}

function useForm() {
	const stage = useStage({})
	return {
		bind: bindInput(stage),
		register: changeState(stage),
		watch: parseState(stage),
		handleSubmit: handleSubmit(stage),
	}
}

export default useForm
