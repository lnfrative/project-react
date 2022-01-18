import { BackendMarketData } from 'interfaces'

interface BackendCoin {
	asset: string
	name: string
	status: number
	staking: number
	masternodes: number
	poolbalance?: number
	id: number
	market_data: BackendMarketData
}

export default BackendCoin
