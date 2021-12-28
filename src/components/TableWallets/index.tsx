// region import
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// contexts
import { Backend } from '@/contexts'

// utilities
import { BackendWallet } from '@/utilities/Interfaces'
import { resources, message } from '@/utilities'

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
import { nestStyles, ItemProps } from './module'
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

const endpointWallets = resources.endpoints.get.wallets

function TableWallets() {
  const { response } = useContext(Backend)
  const styles = nestStyles()
  const wallets: Array<BackendWallet> = response.get({ endpoint: endpointWallets })?.data

  return (
    <div className={styles.container}>
      <Header />
      {!wallets.length && (
        <div className={styles.messageEmpty}>
          {message({ id: 'NO_WALLETS_CREATED' })}
        </div>
      )}
      {wallets.map((wallet, index) => (
        <Item final={wallets.length === index + 1} key={wallet.coin_id} />
      ))}
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

function Item(props: ItemProps) {
  const styles = nestStyles(props)
  return (
    <Link to="/coin/dogecash" className={styles.item}>
      <ValueCoin srcImageCoin="https://i.imgur.com/80rvyLS.png" value={254.00000084} name="DogeCash" shortname="DOGE" />
      <ValuePrice value={0.02465} />
      <ValueVariation design="small" value={4.54} />
      <ValuePool valueDecimal={454.00000084} valuePercentage={0.113} />
      <CanvasValueVariation coordsValueVariation={testValueVariation} />
      <WalletActions />
    </Link>
  )
}

export default TableWallets
