import __vars__ from '@/__vars__'
import {
  RouteParamsCoin,
  RouteParamsSetting,
} from '@/utilities/Interfaces'

interface ResourceCoin {
  logo: string,
}

const routeParamsCoin: RouteParamsCoin = {
  nameCoin: 'nameCoin',
  nameCoinDetail: 'nameCoinDetail',
}

const routeParamsSetting: RouteParamsSetting = {
  section: 'section',
}

const routeParams = {
  ...routeParamsCoin,
  ...routeParamsSetting,
}

const coin: Record<string, ResourceCoin> = {
  DOGEC: {
    logo: 'https://i.imgur.com/RjMuSiN.png',
  },
}

const endpoints = {
  get: {
    userCsrf: '/api/user/csrf',
    user: '/api/user',
    wallets: '/api/user/wallets',
    coins: '/api/coins',
    newaddress: '/api/user/wallets/{ticker}/newaddress',
  },
  post: {
    userCreateAccessToken: '/api/user/create/access-token',
    user: '/api/user',
  },
  aliases: {
    ticker: '{ticker}',
  },
}

const path = {
  backendUrlBase: __vars__.BACKEND_URL_BASE,
  home: '/',
  login: '/',
  signup: '/sign-up',
  coin: '/coin',
  coinSpecific: `/coin/:${routeParamsCoin.nameCoin}/:${routeParamsCoin.nameCoinDetail}?`,
  setting: '/setting',
  settingSpecific: `/setting/:${routeParamsSetting.section}?`,
}

const colors = {
  color_variety_upstream: '#C8FCA3',
  color_variety_dowsntream: '#FF8C8C',
}

export default {
  endpoints,
  path,
  routeParams,
  colors,
  coin,
}
