import { FormHTMLAttributes } from 'react'

interface FormProps {
	formHTMLAttributes: FormHTMLAttributes<HTMLFormElement>
	captcha?: boolean
	requestId?: string
	onSuccess?: () => void
}

export default FormProps
