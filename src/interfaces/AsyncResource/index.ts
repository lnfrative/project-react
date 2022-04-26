type Status = 'nonload' | 'loading' | 'loaded' | 'error'

interface AsyncResource<Data> {
  status: Status,
  data: Data
  error?: boolean
}

export default AsyncResource