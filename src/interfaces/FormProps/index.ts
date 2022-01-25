import { FormHTMLAttributes } from 'react'

interface FormProps {
	formHTMLAttributes: FormHTMLAttributes<HTMLFormElement>
	captcha?: boolean
}

export default FormProps
