import { RouteParamsCoin } from '@/utilities/Interfaces'

const routeParamsCoin: RouteParamsCoin = {
  nameCoin: 'nameCoin',
}

const routeParams = {
  ...routeParamsCoin,
}

const path = {
  home: '/',
  login: '/',
  signup: '/sign-up',
  dashboard: '/dashboard',
  coin: `/coin/:${routeParamsCoin.nameCoin}`,
}

const colors = {
  color_variety_upstream: '#C8FCA3',
  color_variety_dowsntream: '#FF8C8C',
}

export default {
  path,
  routeParams,
  colors,
}
