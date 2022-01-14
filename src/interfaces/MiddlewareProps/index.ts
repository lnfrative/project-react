import { UserRequirement } from 'types'

interface MiddlewareProps {
  requirements: Array<UserRequirement>,
  children: any,
}

export default MiddlewareProps
