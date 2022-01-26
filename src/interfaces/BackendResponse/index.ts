interface BackendResponse {
	success?: boolean
	error?: string | { second_factor: boolean }
	data?: any
	status: number
}

export default BackendResponse
