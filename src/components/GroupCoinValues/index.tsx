// region import
import React, { useContext } from 'react'

// interfaces
import { BackendBalance } from 'interfaces'

// contexts
import { Backend } from 'contexts'

// utilities
import { message, resources } from 'utilities'

// components
import { GroupSelectValueDecimal, GroupValueDecimal, GroupSelectValueVariation } from 'components'

// styles
import styles from './index.module.css'
// endregion

const testOptions = [
	{ id: 'BTC', value: 'BTC', main: true },
	{ id: 'USD', value: 'USD' },
]

const testTimeOptions = [
	{ id: 86400, value: '24 hours', main: true },
	{ id: 604800, value: '7 days' },
	{ id: 2419200, value: '28 days' },
]

function GroupCoinValues() {
	const backend = useContext(Backend)
	const balance: BackendBalance = backend.response({
		endpoint: resources.endpoints.get.userBalance,
		method: 'get',
	})?.data
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
						optionsSelect={testOptions}
					/>
				</div>
				<GroupSelectValueVariation
					valueVariation={balance.change}
					titleSelect="Last"
					optionsSelect={testTimeOptions}
				/>
			</div>
		</div>
	)
}

export default GroupCoinValues
