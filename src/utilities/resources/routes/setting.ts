import { Route } from 'interfaces'

const setting: Route = {
  base: '/setting',
  middlewares: ['auth'],
  route: {
    path: '/setting/:section?',
    params: {
      section: 'section',
    },
  },
  aliases: {},
}

export default setting
