import { Route } from 'interfaces'

const setting: Route = {
  base: '/setting',
  route: {
    path: '/setting/:section',
    params: {
      section: ':section',
    },
  },
  aliases: {},
}

export default setting
