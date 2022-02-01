// region import
import React, { useContext, useEffect } from 'react'

// hooks
import { useStage } from 'hooks'

// interfaces
import { BackendBalance } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// utilities
import { message, resources, requestId } from 'utilities'

// components
import {
	GroupSelectValueDecimal,
	GroupValueDecimal,
	GroupSelectValueVariation,
	BackdropLoader,
} from 'components'

// modules
import { selectCoin, selectTime, initialState } from './module'

// styles
import styles from './index.module.css'
// endregion

const coinOptions = [
	{ id: 'btc', value: 'BTC', main: true },
	{ id: 'ltc', value: 'LTC' },
	{ id: 'eth', value: 'ETH' },
]

const timeOptions = [
	{ id: '24h', value: '24 hours', main: true },
	{ id: '7d', value: '7 days' },
	{ id: '14d', value: '14 days' },
	{ id: '30d', value: '30 days' },
	{ id: '1y', value: '1 year' },
]

function GroupCoinValues() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const balance: BackendBalance = backend.response({
		endpoint: resources.endpoints.get.userBalance,
		method: 'get',
	})?.data

	const params = {
		main_currency: stage.state.currency?.id ?? '',
		secondary_currency: stage.state.coin?.id ?? '',
		time: stage.state.variation?.id ?? '',
	}

	const loading =
		backend.loading?.id === requestId('get', resources.endpoints.get.userBalance, params)

	useEffect(() => {
		const { variation, coin, currency } = stage.state
		if (variation?.id || coin?.id || currency?.id) {
			backend.request({
				endpoint: resources.endpoints.get.userBalance,
				method: 'get',
				params,
			})
		}
	}, [stage.state])

	return (
		<div className={styles.container}>
			<GroupValueDecimal
				design="top"
				title={message({ id: 'BALANCE' })}
				value={balance.balance_main_currency}
			/>
			<div className={styles.containerSelectValues}>
				<div className={styles.space}>
					<GroupSelectValueDecimal
						valueDecimal={balance.balance_secondary_currency}
						titleSelect="Worth in"
						optionsSelect={coinOptions}
						onSelect={selectCoin(stage)}
					/>
				</div>
				<GroupSelectValueVariation
					valueVariation={balance.change}
					titleSelect="Last"
					optionsSelect={timeOptions}
					onSelect={selectTime(stage)}
				/>
			</div>
			<BackdropLoader open={loading} />
		</div>
	)
}

export default GroupCoinValues
