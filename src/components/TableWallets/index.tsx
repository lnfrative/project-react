// region import
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

// contexts
import { Backend, Currency } from 'contexts'

// utilities
import { BackendCoin } from 'interfaces'
import { BackendWallets } from 'types'
import { resources, message, requestId } from 'utilities'

// components
import {
	ValueCoin,
	ValuePrice,
	ValueVariation,
	ValuePool,
	SVGValueVariation,
	WalletActions,
	ButtonAddWallet,
	BackdropLoader,
} from 'components'

// modules
import { nestStyles, WalletProps } from './module'
// endregion

const endwallets = resources.endpoints.get.wallets
const endpointCoins = resources.endpoints.get.coins

const nameCoin = resources.routes.coin.aliases.name

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
	const coin = resources.utils.filterCoin(coins, { id: props.wallet.coin_id })
	const styles = nestStyles(props)

	if (!coin) return null
	const to = nameCoin.path.replace(
		nameCoin.alias.name,
		resources.utils.normaliceCoinName(coin.name)
	)
	return (
		<Link to={to} className={styles.item}>
			<ValueCoin
				srcImageCoin={resources.coin[resources.utils.normaliceCoinName(coin.name)].logo}
				value={props.wallet.balance}
				name={coin.name}
				shortname={coin.asset}
			/>
			{/* TODO: Show a loading if currency has not be define. */}
			{!!currency.state.id && <ValuePrice value={coin.market_data.prices[currency.state.id]} />}
			<ValueVariation design="small" value={coin.market_data.price_change_24h} />
			<ValuePool valueDecimal={coin.poolbalance ?? 0} valuePercentage={0} />
			<SVGValueVariation
				variation={coin.market_data.price_change_24h}
				coordsValueVariation={coin.market_data.chart_24h}
			/>
			<WalletActions />
		</Link>
	)
}

function TableWallets() {
	const { response, loading } = useContext(Backend)
	const styles = nestStyles()
	const wallets: BackendWallets = response.get({ endpoint: endwallets })?.data
	const coins: Array<BackendCoin> = response.get({ endpoint: endpointCoins })?.data

	return (
		<div className={styles.container}>
			<Header />
			{!wallets.length && (
				<div className={styles.messageEmpty}>{message({ id: 'NO_WALLETS_CREATED' })}</div>
			)}
			{wallets.map((wallet, index) => (
				<Wallet key={wallet.coin_id} wallet={wallet} final={wallets.length === index + 1} />
			))}
			{!!coins.filter(coin => wallets.filter(wallet => wallet.coin_id === coin.id).length === 0)
				.length && (
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
			<BackdropLoader open={loading?.id === requestId('get', endwallets)} />
		</div>
	)
}

export default TableWallets
