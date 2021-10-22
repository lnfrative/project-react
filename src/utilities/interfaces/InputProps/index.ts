import { InputHTMLAttributes } from 'react'
import { Error } from '@/utilities/interfaces'

interface InputProps {
  error?: Error,
  InputHTMLAttributes: InputHTMLAttributes<HTMLInputElement>
}

export default InputProps
