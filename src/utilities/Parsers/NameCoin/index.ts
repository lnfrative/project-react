import { NameCoin } from 'types'
import { ResourceCoinData } from 'interfaces'
import { resources } from 'utilities'

function parseNameCoin(nameCoin: NameCoin): ResourceCoinData {
  return resources.coin[nameCoin]
}

export default parseNameCoin
