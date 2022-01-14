import { UserRequirement } from 'types'

interface Route {
  base: string,
  middlewares: Array<UserRequirement>,
  route: {
    path: string,
    params: Record<string, string>,
  },
  aliases: Record<string, { path: string, alias: Record<string, string> }>
}

export default Route
