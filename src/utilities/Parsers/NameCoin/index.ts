import { NameCoin } from 'utilities/Types'
import { ResourceCoinData } from 'utilities/Interfaces'
import { resources } from 'utilities'

function parseNameCoin(nameCoin: NameCoin): ResourceCoinData {
  return resources.coin[nameCoin]
}

export default parseNameCoin
