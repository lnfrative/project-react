type Status = 'nonload' | 'loading' | 'loaded' | 'error'

interface AsyncResource<Data> {
  status: Status,
  data: Data
  error?: any
  id?: number | string
}

export default AsyncResource