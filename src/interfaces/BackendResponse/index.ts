interface BackendResponse {
	success?: boolean
	error?: string | { second_factor: boolean }
	data?: any | undefined
	status: number
}

export default BackendResponse
