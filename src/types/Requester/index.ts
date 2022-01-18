interface RequesterArgs {
	endpoint: string
	params?: Record<string, string>
	updateCache?: boolean
	label?: string
}

type Requester = (args: RequesterArgs) => void

export default Requester
