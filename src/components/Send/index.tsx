// region import
import React, { useContext } from 'react'

// interfaces
import { BackendCoin, BackendWallet, BackendUser } from 'interfaces'

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
	StyledLink,
	Values,
} from './style'
// endregion

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

	const user: BackendUser = backend.response({
		method: 'get',
		endpoint: resources.endpoints.get.user,
	})?.data

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
	const balancePrice = price * resources.utils.satsToBTC(wallet?.balance ?? 0)
	const amountPrice = price * (amount ?? 0)
	const amountPriceSplit = resources.utils.splitFloat(amountPrice, 2)
	const remainingBalance = resources.utils.splitFloat(balancePrice - amountPrice, 2)

	const insufficientFunds = parseInt(remainingBalance.value, 10) < 0
	const invalidAmount = Number.isNaN(price * amount) && !!amount
	const emptyAddress = !address
	const emptyAmount = !amount

	const params = {
		address: `${address}`,
		coin_id: stage.state.optionSelected?.id ?? '',
		value: Math.floor(amount * 10 ** 8),
		type: '4',
		concept: 'Transaction',
		captcha_hash: captcha.state.hash ?? '',
	}

	const loadingSendTransaction = backend.loading?.id === requestId('post', endtransaction, params)

	return (
		<div className={styles.container}>
			<div className={styles.group}>
			<Panel title="Send">
				<Values>
					{coins && (
						<Select
							onSelect={selectSend(stage)}
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
					<TwoFactor
						onSuccess={success(stage, clearInputs)}
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
								{amountPriceSplit.value} {currency.state.id?.toUpperCase()}
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
								{remainingBalance.value} {currency.state.id?.toUpperCase()}
							</div>

							{!user.two_factor_verified && (
								<ErrorMessage style={{ textAlign: 'center' }}>
									<StyledLink to="/setting/security">
										Enable 2FA
									</StyledLink>
									{' '}
									<span>
									 to start sending!
									</span>
								</ErrorMessage>
							)}

							<div className={styles.buttonSend}>
								<Button
									title="Send"
									buttonHTMLAttributes={{
										disabled:
											!user.two_factor_verified ||
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
