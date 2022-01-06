import { CoinAvailableProps } from '@/utilities/Interfaces'
import { Requester } from '@/utilities/Types'
import { resources } from '@/utilities'

const endnewaddress = resources.endpoints.get.newaddress
const endwallets = resources.endpoints.get.wallets
const endaliases = resources.endpoints.aliases

function onClick(
  props: CoinAvailableProps, request: Requester,
) {
  return () => {
    request({ endpoint: endnewaddress.replace(endaliases.coinId, props.id.toString()) })
    request({ endpoint: endwallets, updateCache: true })
  }
}

export {
  onClick,
}
