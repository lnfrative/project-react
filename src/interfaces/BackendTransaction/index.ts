interface BackendTransaction {
	type: 1 | 2 | 3 | 4
	accountable: boolean
	status: 1 | 2 | 3 | 4 | 5
	account_id: number
	coin_id: number
	value: number
	concept: string
	txid: string
	address: string
	balance: number
	created_at: number
	updated_at: number
}

export default BackendTransaction
