// region import
import React, { useContext } from 'react'

// contexts
import { Backend, Currency } from 'contexts'

// components
import { SVGIconIncoming, SVGIconOutgoing } from 'components'

// interfaces
import { BackendCoin, TransactionProps } from 'interfaces'

// utilities
import { resources, message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function Transaction(props: TransactionProps) {
	const backend = useContext(Backend)
	const currency = useContext(Currency)
	const date = resources.utils.parseTimestamp(props.data.timestamp * 1000, 'yyyy.mm.dd')
	const coins: Array<BackendCoin> = backend.response({
		endpoint: resources.endpoints.get.coins,
		method: 'get',
	})?.data
	const [coin] = coins.filter(el => props.data.coin_id === el.id)

	const currencyPrice = resources.utils.splitFloat(
		resources.utils.satsToBTC(
			coin.market_data.prices[currency.state.id ?? 'usd'] * props.data.value
		),
		2
	)

	return (
		<div className={styles.movement}>
			<div className={styles.movementImg}>
				{props.data.value >= 0 && <SVGIconIncoming />}
				{props.data.value < 0 && <SVGIconOutgoing />}
			</div>

			<div className={styles.movementData}>
				<div className={styles.movementGroupData}>
					<div className={styles.price}>
						{props.data.concept}
						{' ('}
						{!!props.data.accountable && <div>{message({ id: 'COMPLETED' })}</div>}
						{!props.data.accountable && <div>{message({ id: 'PENDING' })}</div>})
					</div>
					{props.data.value >= 0 && (
						<div className={styles.movementPriceUp}>
							{currencyPrice.integer}.{currencyPrice.decimal} {currency.state.id?.toUpperCase()}
						</div>
					)}
					{props.data.value < 0 && (
						<div className={styles.movementPriceDown}>
							{currencyPrice.integer}.{currencyPrice.decimal}
							{currency.state.id?.toUpperCase()}
						</div>
					)}
				</div>
				<div className={styles.movementGroupDataBelow}>
					<div className={styles.secondRow}>{date}</div>
					<div className={styles.secondRow}>
						{resources.utils.satsToBTC(props.data.value)} {coin.asset}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transaction
