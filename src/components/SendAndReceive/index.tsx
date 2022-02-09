// region import
import React, { useContext } from 'react'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Currency } from 'contexts'

// interfaces
import { BackendCoin, BackendWallet, BackendAddress } from 'interfaces'

// components
import { Select, ImgCoin } from 'components'

// utilities
import { resources } from 'utilities'

// styles
import styles from './index.module.css'

// modules
import { initialState, selectReceive } from './module'
// endregion

const endaddresses = resources.endpoints.get.addresses
const endcoins = resources.endpoints.get.coins
const endwallets = resources.endpoints.get.wallets

function SendAndReceive() {
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const currency = useContext(Currency)
	const address: BackendAddress | undefined = backend.response({
		method: 'get',
		endpoint: endaddresses.replace(
			resources.endpoints.aliases.coinId,
			stage.state.optionSelected?.id ?? ''
		),
	})?.data[0]
	const wallets: Array<BackendWallet> | undefined = backend.response({
		method: 'get',
		endpoint: endwallets,
	})?.data
	const coins: Array<BackendCoin> | undefined = backend.response({
		method: 'get',
		endpoint: endcoins,
	})?.data

	const wallet = wallets?.filter(
		value => value.coin_id.toString() === stage.state.optionSelected?.id
	)[0]
	const coin = coins?.filter(value => value.id.toString() === stage.state.optionSelected?.id)[0]

	return (
		<div className={styles.container}>
			<div className={styles.mainGroup}>
				<div className={styles.group}>
					<div className={styles.groupTitle}>Receive</div>
					<div className={styles.groupValues}>
						{coins && (
							<Select
								onSelect={selectReceive(stage)}
								design="outlined"
								options={coins.map(value => ({
									id: value.id.toString(),
									value: value.name,
									secondaryValue: value.asset,
									element: (
										<ImgCoin
											size="small"
											src={resources.coin[resources.utils.normaliceCoinName(value.name)].logo}
										/>
									),
									main: value.id === 1,
								}))}
							/>
						)}

						<div className={styles.containerReceiveAddress}>
							<div className={styles.receiveWalletAddress}>
								{stage.state.optionSelected?.secondaryValue} Wallet Address
							</div>
							<div className={styles.receiveAddress}>
								{address?.already_generated && <span>{address.address}</span>}
								{!address?.already_generated && (
									<span className={styles.noAddress}>You dont have a generated address</span>
								)}
							</div>
							<div className={styles.receiveData}>
								{'Balance : '}
								{wallet?.balance ?? 0} {stage.state.optionSelected?.secondaryValue}
								{' ≈ '}
								{(coin?.market_data.prices[currency.state.id ?? ''] ?? 0) *
									(wallet?.balance ?? 0)}{' '}
								{currency.state.id?.toUpperCase()}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.secundaryGroup}>
				<div className={styles.group}>
					<div className={styles.groupTitle}>Send</div>
					<div className={styles.groupValues}>values</div>
				</div>
			</div>
		</div>
	)
}

export default SendAndReceive
