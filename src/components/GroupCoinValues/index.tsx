// region import
import React, { useEffect } from 'react'

// hooks
import { useStage, useSessionStore } from 'hooks'

// utilities
import { message, resources } from 'utilities'
import { fetchBalance } from 'utilities/fetcher'

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
import { SelectValues, SelectSpacing, StyledGroupValueDecimal } from './style'
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
	const session = useSessionStore()
	const stage = useStage(initialState)

	const params = resources.utils.parseParams({
		main_currency: stage.state.currency?.id ?? '',
		secondary_currency: stage.state.coin?.id ?? '',
		time: stage.state.variation?.id ?? '',
	})

	useEffect(() => {
		if (session.balance.data) {
			stage.commitState({ backendBalance: session.balance.data })
		}
	}, [session.balance])

	useEffect(() => {
		const { variation, coin, currency } = stage.state
		if (variation?.id || coin?.id || currency?.id) {
			fetchBalance(params)
		}
	}, [stage.state.variation, stage.state.coin, stage.state.currency])

	return (
		<div className={styles.container}>
			<StyledGroupValueDecimal>
				<GroupValueDecimal
					design="top"
					title={message({ id: 'BALANCE' })}
					value={session.balance.data?.balance_main_currency ?? 0}
					sign="$"
					decimals={2}
					loading={session.balance.status !== 'loaded'}
				/>
			</StyledGroupValueDecimal>
			<SelectValues>
				<SelectSpacing>
					<GroupSelectValueDecimal
						valueDecimal={session.balance.data?.balance_secondary_currency ?? 0}
						titleSelect="Worth in"
						optionsSelect={coinOptions}
						onSelect={selectCoin(stage)}
						loading={session.balance.status !== 'loaded'}
					/>
				</SelectSpacing>
				<GroupSelectValueVariation
					valueVariation={session.balance.data?.change ?? 0}
					titleSelect="Last"
					optionsSelect={timeOptions}
					onSelect={selectTime(stage)}
					loading={session.balance.status !== 'loaded'}
				/>
			</SelectValues>
			<BackdropLoader open={session.balance.status === 'loading' && !!session.balance.data} />
		</div>
	)
}

export default GroupCoinValues
