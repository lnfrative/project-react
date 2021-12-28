interface BackendWallet {
  coin_id: number,
  ticker: string,
  balance: number,
  latest_address?: string,
}

export default BackendWallet
