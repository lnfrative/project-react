import { Route } from 'interfaces'

const recover: Route = {
  base: '/recover',
  middlewares: ['guess'],
  route: {
    path: '/recover/password',
    params: {},
  },
  aliases: {},
}

export default recover
