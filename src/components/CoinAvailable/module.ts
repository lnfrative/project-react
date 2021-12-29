import { ContextModalState, Stage, CoinAvailableProps } from '@/utilities/Interfaces'
import { Requester } from '@/utilities/Types'
import { resources } from '@/utilities'

const endnewaddress = resources.endpoints.get.newaddress
const endwallets = resources.endpoints.get.wallets
const endaliases = resources.endpoints.aliases

function onClick(
  props: CoinAvailableProps, contextModal: Stage<ContextModalState>, request: Requester,
) {
  return () => {
    request({ endpoint: endnewaddress.replace(endaliases.ticker, props.id) })
    request({ endpoint: endwallets, updateCache: true })
    contextModal.commitState({ status: 'close', id: undefined })
  }
}

export {
  onClick,
}
