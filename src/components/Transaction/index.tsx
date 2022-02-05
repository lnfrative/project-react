// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

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
	const date = new Date(props.data.timestamp).toISOString().split('T')[0]
	const coins: Array<BackendCoin> = backend.response({
		endpoint: resources.endpoints.get.coins,
		method: 'get',
	})?.data
	const [coin] = coins.filter(el => props.data.coin_id === el.id)
	return (
		<div className={styles.movement}>
			<div className={styles.movementImg}>
				{props.data.value >= 0 && <SVGIconIncoming />}
				{props.data.value < 0 && <SVGIconOutgoing />}
			</div>

			<div className={styles.movementData}>
				<div className={styles.movementGroupData}>
					<div className={styles.price}>
						{props.data.value >= 0 && (
							<div className={styles.movementPriceUp}>{props.data.value}</div>
						)}
						{props.data.value < 0 && (
							<div className={styles.movementPriceDown}>{props.data.value}</div>
						)}
						<div className={styles.coin}>{coin.asset}</div>
					</div>
					<div>{date}</div>
				</div>
				<div className={styles.movementGroupData}>
					<div>{props.data.concept}</div>
					<div>
						{props.data.status === 1 && message({ id: 'CREATED' })}
						{props.data.status === 2 && message({ id: 'VALIDATED' })}
						{props.data.status === 3 && message({ id: 'CONFIRMED' })}
						{props.data.status === 4 && message({ id: 'APPROVED' })}
						{props.data.status === 5 && message({ id: 'COMPLETED' })}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Transaction
