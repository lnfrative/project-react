import { FormEventHandler } from 'react'
import { useStage } from 'hooks'
import { Stage } from 'utilities/Interfaces'

function changeState(stage: Stage<{}>) {
  return (arg: { name: string }) => (value: string, hasError: boolean) => {
    stage.commitState({ [arg.name]: { value, hasError } })
  }
}

function parseState(stage: Stage<{}>) {
  return Object.assign(stage.state)
}

function handleSubmit(stage: Stage<{}>) {
  return (args: { onSubmit: Function }): FormEventHandler<HTMLFormElement> => {
    return (e) => {
      e.preventDefault()
      args.onSubmit(stage.state)
    }
  }
}

function useForm() {
  const stage = useStage({})
  return {
    register: changeState(stage),
    watch: parseState(stage),
    handleSubmit: handleSubmit(stage),
  }
}

export default useForm
