// region import
import React, { useContext } from 'react'
import { Tooltip } from '@mui/material'

// contexts
import { Currency } from 'contexts'

// components
import { SVGIconIncoming, SVGIconOutgoing, SVGIconReward } from 'components'

// interfaces
import { TransactionProps } from 'interfaces'

// hooks
import { useApiStore } from 'hooks'

// utilities
import { resources, message } from 'utilities'

// modules
import { statusMessage } from './module'

// styles
import styles from './index.module.css'
import { MovementGroupData, MovementGroupDataBelow, Data } from './style'
// endregion

function Transaction(props: TransactionProps) {
	const api = useApiStore()
	const currency = useContext(Currency)
	const date = resources.utils.parseTimestamp(props.data.timestamp * 1000, 'normal')
	
	const [coin] = api.coins.data.filter(el => props.data.coin_id === el.id)

	const currencyPrice = resources.utils.splitFloat(
		resources.utils.satsToBTC(
			coin.market_data.prices[currency.state.id ?? 'usd'] * props.data.value
		),
		2
	)

	return (
		<div className={styles.movement}>
			<div className={styles.movementImg}>
				{props.data.type === 1 && <SVGIconIncoming />}
				{props.data.type === 4 && <SVGIconOutgoing />}
				{props.data.type === 2 && <SVGIconReward />}
				{props.data.type === 5 && <SVGIconReward />}
			</div>

			<div className={styles.movementData}>
				<div className={styles.movementGroupData}>
				<MovementGroupData>	
					<Data>
						<div className={styles.price}>
							{props.data.concept}
							{' ('}
							{(!!props.data.accountable &&  props.data.status === 5) && (
								<Tooltip arrow title={statusMessage(message, props.data.status)}>
									<div>{message({ id: 'COMPLETED' })}</div>
								</Tooltip>
							)}
							{(!!props.data.accountable && props.data.status !== 5) && (
								<Tooltip arrow title={statusMessage(message, props.data.status)}>
									<div>{message({ id: 'PENDING' })}</div>
								</Tooltip>
							)}
							{!props.data.accountable && (
								<Tooltip arrow title={statusMessage(message, props.data.status)}>
									<div>{message({ id: 'CANCELED' })}</div>
								</Tooltip>
							)}
							)
						</div>
					</Data>
					{props.data.value >= 0 && (
						<div className={styles.movementPriceUp}>
							{currencyPrice.value} {currency.state.id?.toUpperCase()}
						</div>
					)}
					{props.data.value < 0 && (
						<div className={styles.movementPriceDown}>
							{currencyPrice.value} {currency.state.id?.toUpperCase()}
						</div>
					)}
				</MovementGroupData>
				</div>
				<MovementGroupDataBelow>
					<Data>
						<div className={styles.secondRow}>{date}</div>
					</Data>
					<Data>
						<div className={styles.secondRow}>
							{resources.utils.satsToBTC(props.data.value)} {coin.asset}
						</div>
					</Data>
				</MovementGroupDataBelow>
			</div>
		</div>
	)
}

export default Transaction
