import { FormHTMLAttributes } from 'react'
import { AsyncResource } from 'interfaces'

interface FormProps {
	formHTMLAttributes: FormHTMLAttributes<HTMLFormElement>
	captcha?: boolean
	requestId?: string
	asyncResource?: AsyncResource<any>
	onSuccess?: () => void
}

export default FormProps
