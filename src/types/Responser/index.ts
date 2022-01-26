import { BackendResponse, ResponserArgs } from 'interfaces'

type Responser = (args: ResponserArgs) => BackendResponse | undefined

export default Responser
