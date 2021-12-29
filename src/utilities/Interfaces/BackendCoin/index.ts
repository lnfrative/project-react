interface BackendCoin {
  asset: string,
  name: string,
  status: number,
  staking: number,
  masternodes: number,
  poolbalance?: number,
}

export default BackendCoin
