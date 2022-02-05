// region import
import React, { useContext } from 'react'

// contexts
import { Backend } from 'contexts'

// interfaces
import { BackendCoin, TransactionProps } from 'interfaces'

// utilities
import { resources, message } from 'utilities'

// styles
import styles from './index.module.css'
// endregion

function Transaction(props: TransactionProps) {
	const backend = useContext(Backend)
	const date = new Date(props.data.created_at).toISOString().split('T')[0]
	const coins: Array<BackendCoin> = backend.response({
		endpoint: resources.endpoints.get.coins,
		method: 'get',
	})?.data
	const [coin] = coins.filter(el => props.data.coin_id === el.id)
	return (
		<div className={styles.movement}>
			<div className={styles.movementImg} />
			<div className={styles.movementData}>
				<div className={styles.movementGroupData}>
					<div className={styles.price}>
						<div className={styles.movementPriceUp}>
							{props.data.type === 4 ? '-' : '+'}
							{props.data.value}
						</div>
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
