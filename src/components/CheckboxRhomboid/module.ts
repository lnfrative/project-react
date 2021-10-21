import { RefObject } from 'react'

function onInputClick(args: { inputRef: RefObject<HTMLInputElement>, onCheck: Function }) {
  return () => args.onCheck(args.inputRef.current?.checked)
}

export { onInputClick }
