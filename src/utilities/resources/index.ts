import __vars__ from '@/__vars__'
import {
  RouteParamsCoin,
  RouteParamsSetting,
} from '@/utilities/Interfaces'

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

const coin = {
  dogecash: {
    name: 'DogeCash',
    id: 'DOGEC',
    logo: 'https://i.imgur.com/RjMuSiN.png',
    key: 'dogecash',
  },
}

const path = {
  backendUrlBase: __vars__.BACKEND_URL_BASE,
  home: '/',
  login: '/',
  signup: '/sign-up',
  dashboard: '/',
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
  path,
  routeParams,
  colors,
  coin,
}
