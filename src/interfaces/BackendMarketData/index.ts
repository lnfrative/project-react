interface BackendMarketData {
	chart_24h: Array<[number, number]>
	market_cap: Record<string, number>
	prices: Record<string, number>
	price_change_1y: number
	price_change_7d: number
	price_change_14d: number
	price_change_24h: number
	price_change_30d: number
}

export default BackendMarketData
