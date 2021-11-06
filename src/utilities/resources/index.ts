import { RouteParamsCoin, ResourceCoin, ResourceCoinData } from '@/utilities/Interfaces'

const routeParamsCoin: RouteParamsCoin = {
  nameCoin: 'nameCoin',
}

const routeParams = {
  ...routeParamsCoin,
}

const coin: ResourceCoin<ResourceCoinData> = {
  dogecash: {
    name: 'DogeCash',
    id: 'DOGEC',
    logo: 'https://i.imgur.com/RjMuSiN.png',
    key: 'dogecash',
  },
}

const path = {
  home: '/',
  login: '/',
  signup: '/sign-up',
  dashboard: '/',
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
  coin,
}
