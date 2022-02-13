// region import
import React, { useContext } from 'react'

// interfaces
import { BackendCoin, BackendWallet } from 'interfaces'

// contexts
import { Backend, Captcha, Currency } from 'contexts'

// hooks
import { useStage, useForm } from 'hooks'

// utilities
import { requestId, resources } from 'utilities'

// components
import {
	Select,
	ImgCoin,
	SVGIconCreditCard,
	Form,
	TwoFactor,
	Button,
	BackdropLoader,
} from 'components'

// styles
import styles from './index.module.css'

// modules
import { initialState, selectSend, onSubmit } from './module'
// endregion

// const endnewaddress = resources.endpoints.get.newaddress
// const endaddresses = resources.endpoints.get.addresses
const endtransaction = resources.endpoints.post.transactions
const endcoins = resources.endpoints.get.coins
const endwallets = resources.endpoints.get.wallets

function Send() {
	const { bind, watch, handleSubmit, clearInputs } = useForm()
	const stage = useStage(initialState)
	const currency = useContext(Currency)
	const backend = useContext(Backend)
	const captcha = useContext(Captcha)
	const { amount, address } = watch

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

	const price = coin?.market_data.prices[currency.state.id ?? ''] ?? 0
	const balancePrice = price * (wallet?.balance ?? 0)
	const amountPrice = price * (amount ?? 0)

	const params = {
		address: `${address}`,
		coin_id: stage.state.optionSelected?.id ?? '',
		value: amount * 10 ** 8,
		type: '4',
		concept: 'Transaction',
		captcha_hash: captcha.state.hash ?? '',
	}

	const loadingSendTransaction = backend.loading?.id === requestId('post', endtransaction, params)

	return (
		<div className={styles.secundaryGroup}>
			<div className={styles.group}>
				<div className={styles.groupTitle}>Send</div>
				<div className={styles.groupValues}>
					{coins && (
						<Select
							onSelect={selectSend(stage)}
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
					<TwoFactor
						onSuccess={clearInputs}
						method="post"
						endpoint={endtransaction}
						params={params}
					>
						<Form
							captcha
							formHTMLAttributes={{
								className: styles.form,
								onSubmit: handleSubmit({ onSubmit: onSubmit(backend, params) }),
							}}
						>
							<div className={styles.groupAmount}>
								<div className={styles.label}>Amount</div>
								<div className={styles.containerInput}>
									<div className={styles.assetAmount}>
										{stage.state.optionSelected?.secondaryValue}
									</div>
									<input
										placeholder="0.00000000"
										ref={bind({ name: 'amount' })}
										className={styles.input}
									/>
								</div>
							</div>

							<div className={styles.conversionAmount}>
								{amount || 0} {stage.state.optionSelected?.secondaryValue}
								{' ≈ '}
								{amountPrice} {currency.state.id?.toUpperCase()}
							</div>

							<div className={styles.groupAddress}>
								<div className={styles.label}>Recipient address or email</div>
								<div className={styles.containerInput}>
									<div className={styles.iconAddress}>
										<SVGIconCreditCard />
									</div>
									<input
										placeholder="sYBLt1MpLXLC6pCGAfSQwYHh5Jj5Sgks4"
										ref={bind({ name: 'address' })}
										className={styles.input}
									/>
								</div>
							</div>

							<div className={styles.balance}>
								{'Your balance after withdrawal : '}
								{(wallet?.balance ?? 0) - (amount || 0)}{' '}
								{stage.state.optionSelected?.secondaryValue}
								{' ≈ '}
								{balancePrice - amountPrice} {currency.state.id?.toUpperCase()}
							</div>

							<div className={styles.buttonSend}>
								<Button
									title="Send"
									buttonHTMLAttributes={{
										type: 'submit',
										style: {
											maxWidth: 300,
										},
									}}
									design="normal"
								/>
							</div>
						</Form>
					</TwoFactor>
				</div>
			</div>
			<BackdropLoader open={loadingSendTransaction} />
		</div>
	)
}

export default Send
