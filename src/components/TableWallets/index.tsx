// region import
import React from 'react'

// components
import { ValueCoin } from '@/components'

// modules
import { nestStyles } from './module'
// endregion

function TableWallets() {
  const styles = nestStyles()
  return (
    <div className={styles.container}>
      <Header />
      <Item />
      <Item />
      <Item />
      <Item />
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

function Item() {
  const styles = nestStyles()
  return (
    <div className={styles.row}>
      <ValueCoin srcImageCoin="https://i.imgur.com/80rvyLS.png" value={3000} name="DogeCash" shortname="DOGE" />
      <Price />
      <Time />
      <Poolshare />
      <Curve />
      <Actions />
    </div>
  )
}

function Price() {
  return null
}

function Time() {
  return null
}

function Poolshare() {
  return null
}

function Curve() {
  return null
}

function Actions() {
  return null
}

export default TableWallets
