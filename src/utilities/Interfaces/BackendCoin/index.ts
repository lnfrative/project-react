interface BackendCoin {
  asset: string,
  name: string,
  status: number,
  staking: number,
  masternodes: number,
  poolbalance?: number,
  id: number,
}

export default BackendCoin
