// region import
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'

// contexts
import { Backend, Currency } from '@/contexts'

// utilities
import { BackendCoin } from '@/utilities/Interfaces'
import { BackendWallets } from '@/utilities/Types'
import { resources, message, requestId } from '@/utilities'

// components
import {
  ValueCoin,
  ValuePrice,
  ValueVariation,
  ValuePool,
  CanvasValueVariation,
  WalletActions,
  ButtonAddWallet,
} from '@/components'

// modules
import { nestStyles, WalletProps } from './module'
// endregion

const testValueVariation = [
  { value: 30, timestamp: 5 },
  { value: 12, timestamp: 10 },
  { value: 25, timestamp: 15 },
  { value: 25, timestamp: 20 },
  { value: 14, timestamp: 25 },
  { value: 8, timestamp: 30 },
  { value: 16, timestamp: 35 },
  { value: 20, timestamp: 40 },
  { value: 9, timestamp: 45 },
  { value: 9, timestamp: 50 },
  { value: 12, timestamp: 55 },
  { value: 22, timestamp: 60 },
  { value: 32, timestamp: 65 },
  { value: 8, timestamp: 70 },
  { value: 12, timestamp: 75 },
  { value: 20, timestamp: 80 },
  { value: 25, timestamp: 85 },
  { value: 30, timestamp: 90 },
  { value: 35, timestamp: 95 },
  { value: 18, timestamp: 100 },
  { value: 30, timestamp: 105 },
  { value: 2, timestamp: 110 },
  { value: 2, timestamp: 115 },
  { value: 10, timestamp: 120 },
]

const endwallets = resources.endpoints.get.wallets
const endpointCoins = resources.endpoints.get.coins

function TableWallets() {
  const { response, loading } = useContext(Backend)
  const styles = nestStyles()
  const wallets: BackendWallets = response.get({ endpoint: endwallets })?.data
  const coins: Array<BackendCoin> = response.get({ endpoint: endpointCoins })?.data

  return (
    <div className={styles.container}>
      <Header />
      {!wallets.length && (
        <div className={styles.messageEmpty}>
          {message({ id: 'NO_WALLETS_CREATED' })}
        </div>
      )}
      {wallets.map((wallet, index) => (
        <Wallet
          key={wallet.coin_id}
          wallet={wallet}
          final={wallets.length === index + 1}
        />
      ))}
      {!!coins.filter((coin) => (
        wallets.filter((wallet) => wallet.coin_id === coin.id).length === 0
      )).length && (
        <div className={styles.addRow}>
          <div className={styles.containerLine}>
            <div className={styles.addSegmentSuperior} />
            <div className={styles.addSegment} />
          </div>
          <ButtonAddWallet />
          <div className={styles.containerLine}>
            <div className={styles.addSegmentSuperior} />
            <div className={styles.addSegment} />
          </div>
        </div>
      )}
      <Backdrop open={loading?.id === requestId('GET', endwallets)} sx={{ zIndex: 10 }}>
        <CircularProgress />
      </Backdrop>
    </div>
  )
}

function Header() {
  const styles = nestStyles()
  return (
    <div className={styles.header}>
      <div className={styles.headerCell}>
        <span className={styles.arrow}>↓</span>
        <span>Holding</span>
      </div>
      <div className={styles.headerCell}>
        <span>Price</span>
        <span className={styles.arrow}>↓</span>
      </div>
      <div className={styles.headerCell}>
        <span>24h</span>
        <span className={styles.arrow}>↓</span>
      </div>
      <div className={styles.headerCell}>
        <span className={styles.arrow}>↓</span>
        <span>Pool Share</span>
      </div>
      <div className={styles.headerCell}>
        <span className={styles.arrow}>↓</span>
        <span>Curve</span>
      </div>
      <div style={{ justifySelf: 'flex-end' }} className={styles.headerCell}>
        <span>Actions</span>
      </div>
    </div>
  )
}

function Wallet(props: WalletProps) {
  const currency = useContext(Currency)
  const { response } = useContext(Backend)
  const coins: Array<BackendCoin> = response.get({ endpoint: endpointCoins })?.data
  const [coin] = coins.filter((value) => value.id === props.wallet.coin_id)
  const styles = nestStyles(props)
  const to = `/coin/${resources.utils.normaliceCoinName(coin.name)}`
  return (
    <Link to={to} className={styles.item}>
      <ValueCoin
        srcImageCoin={resources.coin[resources.utils.normaliceCoinName(coin.name)].logo}
        value={props.wallet.balance}
        name={coin.name}
        shortname={coin.asset}
      />
      {/* TODO: Show a loading if currency has not be define. */}
      {!!currency.state.id && (
        <ValuePrice
          value={coin.market_data.prices[currency.state.id]}
        />
      )}
      <ValueVariation design="small" value={coin.market_data.price_change_24h} />
      <ValuePool valueDecimal={454.00000084} valuePercentage={0.113} />
      <CanvasValueVariation coordsValueVariation={testValueVariation} />
      <WalletActions />
    </Link>
  )
}

export default TableWallets
