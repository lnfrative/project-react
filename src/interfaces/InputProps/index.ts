import { InputHTMLAttributes, RefObject } from 'react'

interface InputProps {
	attributes?:	InputHTMLAttributes<HTMLInputElement>
	bind?: ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null | undefined
	Icon?: any,
}

export default InputProps
