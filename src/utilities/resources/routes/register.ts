import { Route } from 'interfaces'

const register: Route = {
  base: '/sign-up',
  middlewares: ['guess'],
  route: {
    path: '/sign-up',
    params: {},
  },
  aliases: {},
}

export default register
