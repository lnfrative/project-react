// region import
import React, { useContext, useEffect, useRef } from 'react'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage } from 'hooks'

// contexts
import { Backend, Currency, Captcha } from 'contexts'

// interfaces
import { BackendCoin, BackendWallet } from 'interfaces'

// components
import {
	Select,
	ImgCoin,
	SVGIconCreditCard,
	Button,
	SVGIconRestartAlt,
	SVGIconClipboard,
	BackdropLoader,
	Form,
} from 'components'

// utilities
import { resources, requestId, message } from 'utilities'

// styles
import styles from './index.module.css'

// modules
import { initialState, selectReceive, generateAddress, copyAddressIntoClipboard } from './module'
// endregion

const endnewaddress = resources.endpoints.get.newaddress
const endaddresses = resources.endpoints.get.addresses
const endcoins = resources.endpoints.get.coins
const endwallets = resources.endpoints.get.wallets

function Receive() {
	const addressRef = useRef<HTMLSpanElement>(null)
	const stage = useStage(initialState)
	const backend = useContext(Backend)
	const currency = useContext(Currency)
	const captcha = useContext(Captcha)

	const address = backend.response({
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

	const loadingNewAddress =
		backend.loading?.id ===
		requestId(
			'get',
			endnewaddress.replace(
				resources.endpoints.aliases.coinId,
				stage.state.optionSelected?.id ?? ''
			),
			{
				captcha_hash: captcha.state.hash ?? '',
			}
		)

	const loadingAddresses =
		backend.loading?.id ===
		requestId(
			'get',
			endaddresses.replace(resources.endpoints.aliases.coinId, stage.state.optionSelected?.id ?? '')
		)

	const price = coin?.market_data.prices[currency.state.id ?? ''] ?? 0
	const currencyPriceSplit = resources.utils.splitFloat(
		price * resources.utils.satsToBTC(wallet?.balance ?? 0),
		2
	)

	useEffect(() => {
		if (stage.state.optionSelected) {
			backend.request({
				method: 'get',
				endpoint: endaddresses.replace(
					resources.endpoints.aliases.coinId,
					stage.state.optionSelected.id
				),
			})
		}
	}, [stage.state.optionSelected])

	return (
		<div className={styles.mainGroup}>
			<div className={styles.group}>
				<div className={styles.groupTitle}>Receive</div>
				<div className={styles.groupValues}>
					{coins && (
						<Select
							onSelect={selectReceive(stage)}
							design="outlined"
							options={coins.map((value, index) => ({
								id: value.id.toString(),
								value: value.name,
								secondaryValue: value.asset,
								element: (
									<ImgCoin
										size="small"
										src={resources.coin[resources.utils.normaliceCoinName(value.name)].logo}
									/>
								),
								main: index === 0,
							}))}
						/>
					)}

					<div className={styles.containerReceiveAddress}>
						<div className={styles.receiveWalletAddress}>
							{stage.state.optionSelected?.secondaryValue} Wallet Address
						</div>
						<div className={styles.receiveAddress}>
							<div className={styles.icon}>
								<SVGIconCreditCard />
							</div>
							{address && !loadingAddresses && (
								<span
									role="button"
									tabIndex={0}
									onClick={copyAddressIntoClipboard(address, addressRef)}
									ref={addressRef}
									className={styles.address}
								>
									{address}
								</span>
							)}
							{!address && !loadingAddresses && (
								<span className={styles.noAddress}>{message({ id: 'EMPTY_ADDRESS' })}</span>
							)}
							{loadingAddresses && (
								<div className={styles.loader}>
									<CircularProgress size="1rem" color="inherit" />
								</div>
							)}
						</div>
						<div className={styles.receiveData}>
							{'Balance : '}
							{resources.utils.satsToBTC(wallet?.balance ?? 0)}{' '}
							{stage.state.optionSelected?.secondaryValue}
							{' ≈ '}
							{currencyPriceSplit.value} {currency.state.id?.toUpperCase()}
						</div>
					</div>

					<div className={styles.groupReceiveButtons}>
						<Form
							captcha
							formHTMLAttributes={{
								onSubmit: generateAddress(stage, backend, captcha),
							}}
						>
							<Button
								buttonHTMLAttributes={{
									type: 'submit',
								}}
								design="minimal"
								title="Generate new address"
							>
								<div className={styles.icon}>
									<SVGIconRestartAlt />
								</div>
							</Button>
						</Form>
						<Button
							buttonHTMLAttributes={{
								type: 'button',
								onClick: copyAddressIntoClipboard(address, addressRef),
							}}
							design="minimal"
							title="Copy to clipboard"
						>
							<div className={styles.icon}>
								<SVGIconClipboard />
							</div>
						</Button>
					</div>
				</div>
			</div>
			<BackdropLoader open={loadingNewAddress} />
		</div>
	)
}

export default Receive
