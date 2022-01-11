interface BackendResponse {
  success?: boolean,
  error?: string,
  data?: any,
  code: number,
}

export default BackendResponse
