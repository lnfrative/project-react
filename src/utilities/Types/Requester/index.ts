interface RequesterArgs {
  endpoint: string, params?: Record<string, string>, updateCache?: boolean
}

type Requester = (args: RequesterArgs) => void

export default Requester
