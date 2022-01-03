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
    logo: 'https://dev-account.dogecash.org/assets/coins/DogeCash/logo.svg',
  },
  BTC: {
    logo: 'https://dev-account.dogecash.org/assets/coins/Bitcoin/logo.svg',
  },
  SCC: {
    logo: 'https://dev-account.dogecash.org/assets/coins/Stakecube/logo.png',
  },
  LTC: {
    logo: 'https://dev-account.dogecash.org/assets/coins/Litecoin/logo.svg',
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
  variety_upstream: '#C8FCA3',
  variety_dowsntream: '#FF8C8C',
  variety_main: '#D0CBE6',
  passive_pager: '#27262D',
}

export default {
  endpoints,
  path,
  routeParams,
  colors,
  coin,
}
