// region import
import React from 'react'

// hooks
import { useStage, useForm, useSessionStore, useApiStore } from 'hooks'

// utilities
import { resources } from 'utilities'

// components
import {
	Select,
	ImgCoin,
	SVGIconCreditCard,
	Form,
	TwoFactor,
	Button,
	BackdropLoader,
	DialogNotification,
	SVGIconSuccess,
	Panel,
} from 'components'

// styles
import styles from './index.module.css'

// modules
import { initialState, selectSend, onSubmit, resetStatus, success } from './module'

// styles
import {
	GroupInput,
	Input,
	GroupInputLabel,
	GroupInputWrap,
	GroupInputWrapIcon,
	ErrorMessage,
	Values,
} from './style'
// endregion

const endtransaction = resources.endpoints.post.transactions

function Send() {
	const session = useSessionStore()
	const api = useApiStore()

	const { bind, watch, handleSubmit, clearInputs } = useForm()
	const stage = useStage(initialState)

	const amount = parseFloat(watch.amount?.value || '0')
	const address = watch.address?.value

	const coinId = stage.state.optionSelected?.id ?? ''
	const [coin] = api.coins.data.filter(c => c.id.toString() === coinId)

	const [wallet] = session.wallets.data.filter(
		w => w.coin_id.toString() === coinId
	)

	const price = coin?.market_data.prices[session.currency]
	const balancePrice = price * resources.utils.satsToBTC(wallet?.balance)
	const amountPrice = price * amount
	const amountPriceSplit = resources.utils.splitFloat(amountPrice, 2)
	const remainingBalance = resources.utils.splitFloat(balancePrice - amountPrice, 2)

	const insufficientFunds = parseInt(remainingBalance.value, 10) < 0
	const invalidAmount = Number.isNaN(price * amount) && !!amount
	const emptyAddress = !address
	const emptyAmount = !amount

	const params = {
		address: `${address}`,
		coin_id: coinId,
		value: Math.floor(amount * 10 ** 8),
		type: '4',
		concept: 'Transaction',
		captcha_hash: api.captchaValidate.data,
	}

	const loadingSendTransaction = session.transactionPosted[coinId]?.status === 'loading'

	return (
		<div className={styles.container}>
			<div className={styles.group}>
			<Panel title="Send">
				<Values>
					{api.coins.status === 'loaded' && (
						<Select
							onSelect={selectSend(stage)}
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
					<TwoFactor
						onSuccess={success(stage, clearInputs)}
						method="post"
						endpoint={endtransaction}
						params={params}
					>
						<Form
							captcha
							onSuccess={success(stage, clearInputs)}
							asyncResource={session.transactionPosted[coinId]}
							formHTMLAttributes={{
								className: styles.form,
								onSubmit: handleSubmit({ onSubmit: onSubmit(stage, params) }),
							}}
						>
							<GroupInput>
								<GroupInputLabel>Amount</GroupInputLabel>
								<GroupInputWrap error={insufficientFunds || invalidAmount}>
									<GroupInputWrapIcon>
										{stage.state.optionSelected?.secondaryValue}
									</GroupInputWrapIcon>
									<Input
										placeholder="0.00000000"
										ref={bind({ name: 'amount' })}
										className={styles.input}
									/>
								</GroupInputWrap>
								{insufficientFunds && <ErrorMessage>Insufficient funds.</ErrorMessage>}
								{invalidAmount && (
									<ErrorMessage>
										The amount must be a numerical value less than or equal to your funds.
									</ErrorMessage>
								)}
							</GroupInput>

							<div className={styles.conversionAmount}>
								{amount || 0} {stage.state.optionSelected?.secondaryValue}
								{' ≈ '}
								{amountPriceSplit.value} {session.currency.toUpperCase()}
							</div>

							<GroupInput>
								<GroupInputLabel>Address</GroupInputLabel>
								<GroupInputWrap>
									<GroupInputWrapIcon>
										<SVGIconCreditCard />
									</GroupInputWrapIcon>
									<Input
										placeholder="Enter your address"
										ref={bind({ name: 'address' })}
									/>
								</GroupInputWrap>
							</GroupInput>

							<div className={styles.balance}>
								{'Your balance after withdrawal : '}
								{resources.utils.removeUnnecessaryCryptoDecimals(
									resources.utils.satsToBTC(wallet?.balance ?? 0) - (amount || 0)
								)}{' '}
								{stage.state.optionSelected?.secondaryValue}
								{' ≈ '}
								{remainingBalance.value} {session.currency.toUpperCase()}
							</div>

							<div className={styles.buttonSend}>
								<Button
									title="Send"
									buttonHTMLAttributes={{
										disabled:
											insufficientFunds ||
											invalidAmount ||
											emptyAddress ||
											emptyAmount,
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
				</Values>
			</Panel>
			</div>
			<BackdropLoader open={loadingSendTransaction} />
			<DialogNotification
				Icon={<SVGIconSuccess />}
				title="Transaction created"
				message="An email will be sent to confirm the transaction."
				onClose={resetStatus(stage)}
				open={stage.state.status === 'completed'}
			/>
		</div>
	)
}

export default Send
