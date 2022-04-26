// region import
import React, { useContext, useEffect, useRef } from 'react'
import { CircularProgress } from '@mui/material'

// hooks
import { useStage, useSessionStore, useApiStore } from 'hooks'

// contexts
import { Currency } from 'contexts'

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
	Panel,
} from 'components'

// utilities
import { resources, message } from 'utilities'
import { fetchAddresses } from 'utilities/fetcher'

// styles
import styles from './index.module.css'
import { Values, GroupReceiveButtons, StyledReceiveButton } from './style'

// modules
import { initialState, selectReceive, generateAddress, copyAddressIntoClipboard } from './module'
// endregion

function Receive() {
	const session = useSessionStore()
	const api = useApiStore()
	const addressRef = useRef<HTMLSpanElement>(null)
	const stage = useStage(initialState)
	const currency = useContext(Currency)

	const address = session.addresses[stage.state.optionSelected?.id ?? '']?.data?.[0] ?? ''

	const wallet = session.wallets.data.filter(
		value => value.coin_id.toString() === stage.state.optionSelected?.id
	)[0]
	const coin = api.coins.data.filter(value => value.id.toString() === stage.state.optionSelected?.id)[0]

	const loadingNewAddress = session.newAddress[stage.state.optionSelected?.id ?? '']?.status === 'loading'

	const loadingAddresses = session.addresses[stage.state.optionSelected?.id ?? '']?.status === 'loading'

	const price = coin?.market_data.prices[currency.state.id ?? ''] ?? 0
	const currencyPriceSplit = resources.utils.splitFloat(
		price * resources.utils.satsToBTC(wallet?.balance ?? 0),
		2
	)

	useEffect(() => {
		const { optionSelected } = stage.state
		if (optionSelected) {
			const { id: coinId } = optionSelected
			if (!session.addresses[coinId]) {
				fetchAddresses(coinId)
			}
		}
	}, [stage.state.optionSelected])

	return (
		<div className={styles.mainGroup}>
			<Panel title="Receive">
				<Values>
					{api.coins.status === 'loaded' && (
						<Select
							onSelect={selectReceive(stage)}
							design="outlined"
							options={api.coins.data.map((value, index) => ({
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

					<GroupReceiveButtons>
						<StyledReceiveButton>
							<Form
								captcha
								formHTMLAttributes={{
									onSubmit: generateAddress(stage),
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
						</StyledReceiveButton>
						<StyledReceiveButton>
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
						</StyledReceiveButton>
					</GroupReceiveButtons>
				</Values>
			</Panel>
			<BackdropLoader open={loadingNewAddress} />
		</div>
	)
}

export default Receive
