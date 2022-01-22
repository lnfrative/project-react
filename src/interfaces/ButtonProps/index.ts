import { ButtonHTMLAttributes } from 'react'

interface ButtonProps {
	title: string
	buttonHTMLAttributes: ButtonHTMLAttributes<HTMLButtonElement>
	design: 'normal' | 'simple'
}

export default ButtonProps
