import { InputHTMLAttributes } from 'react'
import { Error } from '@/utilities/Interfaces'

interface InputProps {
  error?: Error,
  InputHTMLAttributes: InputHTMLAttributes<HTMLInputElement>
}

export default InputProps
