import { CoinAvailableProps, ContextBackend } from 'interfaces'
import { resources } from 'utilities'

const endnewaddress = resources.endpoints.get.newaddress
const endwallets = resources.endpoints.get.wallets
const endaliases = resources.endpoints.aliases

function onClick(props: CoinAvailableProps, backend: ContextBackend) {
	return () => {
		backend.request({
			endpoint: endnewaddress.replace(endaliases.coinId, props.id.toString()),
			method: 'get',
		})
		backend.request({ endpoint: endwallets, updateCache: true, method: 'get' })
	}
}

export { onClick }
