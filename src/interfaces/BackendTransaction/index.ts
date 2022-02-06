interface BackendTransaction {
	id: number
	coin_id: number
	account_id: number
	accountable: boolean
	status: 1 | 2 | 3 | 4 | 5
	value: number
	type: 1 | 2 | 3 | 4
	account_from?: string
	internal_transaction_id?: number
	concept: string
	txid?: string
	address?: string
	timestamp: number
}

export default BackendTransaction
