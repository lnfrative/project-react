// region import
import React, { useContext } from 'react'
import { Tooltip, Box } from '@mui/material'

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
import { MovementGroupData, MovementGroupDataBelow, TransactionLink } from './style'
// endregion

function Transaction(props: TransactionProps) {
	const api = useApiStore()
	const currency = useContext(Currency)
	const date = resources.utils.parseTimestamp(props.data.timestamp * 1000, 'normal')
	
	const [coin] = api.coins.data.filter(el => props.data.coin_id === el.id)

	if (!coin) return null

	const txURL = resources.coin[resources.utils.normaliceCoinName(coin.name)].tx
	const currencyPrice = resources.utils.splitFloat(
		resources.utils.satsToBTC(
			coin.market_data.prices[currency.state.id ?? 'usd'] * props.data.value
		),
		2
	)

	return (
		<TransactionLink href={txURL + props.data.txid} target="_blank">
			<div className={styles.movement}>
				<Box
					sx={{
						marginRight: 2,
					}}
				>
					<div className={styles.movementImg}>
						{props.data.type === 1 && <SVGIconIncoming />}
						{props.data.type === 4 && <SVGIconOutgoing />}
						{props.data.type === 2 && <SVGIconReward />}
						{props.data.type === 5 && <SVGIconReward />}
					</div>
				</Box>

				<div className={styles.movementData}>
					<div className={styles.movementGroupData}>
						<MovementGroupData>
							<div className={styles.price}>
								{props.data.concept}
								{' ('}
								<Tooltip arrow title={statusMessage(message, props.data.status)}>
									<span>
										{(props.data.status === 0
											|| props.data.status === 1
											|| props.data.status === 2) && (
											<div>{message({ id: 'PENDING' })}</div>
										)}
										{props.data.status === 3 && (
											<div>{message({ id: 'WAITING' })}</div>
										)}
										{props.data.status === 4 && (
											<div>{message({ id: 'PROCESSING' })}</div>
										)}
										{props.data.status === 5 && (
											<div>{message({ id: 'COMPLETED' })}</div>
										)}
										{(props.data.status === 110
											|| props.data.status === 111
											|| props.data.status === 112
											|| props.data.status === 113) && (
											<div>{message({ id: 'CANCELED' })}</div>
										)}
									</span>
								</Tooltip>
								)
							</div>
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
						<div className={styles.secondRow}>{date}</div>
						<div className={styles.secondRow}>
							{resources.utils.satsToBTC(props.data.value)} {coin.asset}
						</div>
					</MovementGroupDataBelow>
				</div>
			</div>
		</TransactionLink>
	)
}

export { TransactionSkeleton } from './style'

export default Transaction
