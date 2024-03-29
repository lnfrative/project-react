import { BackendCoin } from 'interfaces'
import routes from './routes'

interface ResourceCoin {
	logo: string
	tx: string
}

const coin: Record<string, ResourceCoin> = {
	dogecash: {
		logo: `/images/logos/dogecash.svg`,
		tx: 'https://explorer.dogecash.org/tx/'
	},
	bitcoin: {
		logo: `/images/logos/bitcoin.png`,
		tx: 'https://live.blockcypher.com/btc/tx/'
	},
}

const endpoints = {
	get: {
		userCsrf: '/api/user/csrf',
		user: '/api/user',
		wallets: '/api/user/wallets',
		coins: '/api/coins',
		addresses: '/api/user/wallets/{coinId}/addresses',
		newaddress: '/api/user/wallets/{coinId}/newaddress',
		emailVerify: '/api/email/verify/{user_id}/{hash}/',
		captchaKey: '/api/captcha/key',
		twoFactorQR: '/api/user/second-factor/qr',
		userBalance: '/api/user/balance',
		transactions: '/api/user/transactions',
		summary: '/api/user/summary',
		resendEmailConfirmation: '/api/user/email/verify/resend',
		revenueSummary: '/api/user/income/revenueSummary',
		revenueChart: '/api/user/income/revenueChart',
		incomeOrigin: '/api/user/income/incomeOrigin',
		collateralAssetsAndROI: '/api/user/income/collateralAssetsAndROI',
		returningAssets: '/api/user/income/topReturningAssets',
	},
	post: {
		userCreateAccessToken: '/api/auth/login',
		user: '/api/auth/signup',
		recoverPassword: '/api/auth/recover-password',
		resetPassword: '/api/auth/update-password',
		changePassword: '/api/user/change-password',
		captchaValidate: '/api/captcha/validate',
		secondFactorEnable: '/api/user/second-factor/enable',
		signout: '/api/user/logout',
		transactions: '/api/user/transactions',
		confirmTransaction: '/api/transaction-confirmation',
	},
	aliases: {
		coinId: '{coinId}',
		userId: '{user_id}',
		hash: '{hash}',
	},
}

const ep = {
	api: {
		get: {
			userCsrf: `${process.env.REACT_APP_API}/api/user/csrf`,
			user: `${process.env.REACT_APP_API}/api/user`,
			wallets: `${process.env.REACT_APP_API}/api/user/wallets`,
			coins: `${process.env.REACT_APP_API}/api/coins`,
			addresses: `${process.env.REACT_APP_API}/api/user/wallets/{coinId}/addresses`,
			newaddress: `${process.env.REACT_APP_API}/api/user/wallets/{coinId}/newaddress`,
			emailVerify: `${process.env.REACT_APP_API}/api/email/verify/{user_id}/{hash}/`,
			captchaKey: `${process.env.REACT_APP_API}/api/captcha/key`,
			twoFactorQR: `${process.env.REACT_APP_API}/api/user/second-factor/qr`,
			userBalance: `${process.env.REACT_APP_API}/api/user/balance`,
			transactions: `${process.env.REACT_APP_API}/api/user/transactions`,
			summary: `${process.env.REACT_APP_API}/api/user/summary`,
			resendEmailConfirmation: `${process.env.REACT_APP_API}/api/user/email/verify/resend`,
			revenueSummary: `${process.env.REACT_APP_API}/api/user/income/revenueSummary`,
			revenueChart: `${process.env.REACT_APP_API}/api/user/income/revenueChart`,
			incomeOrigin: `${process.env.REACT_APP_API}/api/user/income/incomeOrigin`,
			collateralAssetsAndROI: `${process.env.REACT_APP_API}/api/user/income/collateralAssetsAndROI`,
			returningAssets: `${process.env.REACT_APP_API}/api/user/income/topReturningAssets`,
		},
		post: {
			userCreateAccessToken: `${process.env.REACT_APP_API}/api/auth/login`,
			user: `${process.env.REACT_APP_API}/api/auth/signup`,
			recoverPassword: `${process.env.REACT_APP_API}/api/auth/recover-password`,
			resetPassword: `${process.env.REACT_APP_API}/api/auth/update-password`,
			changePassword: `${process.env.REACT_APP_API}/api/user/change-password`,
			captchaValidate: `${process.env.REACT_APP_API}/api/captcha/validate`,
			secondFactorEnable: `${process.env.REACT_APP_API}/api/user/second-factor/enable`,
			signout: `${process.env.REACT_APP_API}/api/user/logout`,
			transactions: `${process.env.REACT_APP_API}/api/user/transactions`,
			confirmTransaction: `${process.env.REACT_APP_API}/api/transaction-confirmation`,
		},
		aliases: {
			coinId: `{coinId}`,
			userId: `{user_id}`,
			hash: `{hash}`,
		},
	}
}

const colors = {
	variety_upstream: '#C8FCA3',
	variety_dowsntream: '#FF8C8C',
	variety_main: '#D0CBE6',
	passive_pager: '#27262D',
}

function normaliceCoinName(name: string) {
	return name.toLowerCase().replace(/ +/g, '_')
}

function filterCoin(
	coins: Array<BackendCoin>,
	filter: { name?: string; id?: number }
): BackendCoin | undefined {
	const { name, id } = filter
	if (name) {
		const [backendCoin] = coins.filter(
			value => normaliceCoinName(value.name) === normaliceCoinName(name)
		)
		return backendCoin
	}
	if (id) {
		const [backendCoin] = coins.filter(value => value.id === id)
		return backendCoin
	}
	return undefined
}

function parseParams(params?: Record<string, any>) {
	const paramsCloned = { ...params }
	Object.keys(paramsCloned).forEach(key => {
		if (!paramsCloned[key]) {
			delete paramsCloned[key]
		}
	})
	return paramsCloned
}

function addCommasIntegers(integer: string) {
	const negative = integer.slice(0,1) === '-'
	const value = negative ? integer.slice(1) : integer
	const { length } = value
	if (length < 4) {
		return negative ? `-${value}` : value
	}
	if (length < 7) {
		return `${negative ? '-' : ''}${value.slice(0, length - 3)},${value.slice(length - 3)}`
	}
	return `${negative ? '-' : ''}${value.slice(0, length - 6)}\`${value.slice(length - 6, length - 3)},${value.slice(
		length - 3
	)}`
}

function splitFloat(value: number, decimalLength?: number) {
	const floatSegments: Array<string | undefined> = value.toString().split('.')
	const integer = addCommasIntegers(floatSegments[0] ?? '0')
	const decimal = (floatSegments[1] ?? '00000000').slice(0, decimalLength)
	return {
		integer,
		decimal,
		value: `${integer}.${decimal}` === '0.00' ? '<0.01' : `${integer}.${decimal}`,
	}
}

function satsToBTC(sats: number) {
	return sats / 10 ** 8
}

function removeUnnecessaryCryptoDecimals(crypto: number) {
	return Math.floor(crypto * 10 ** 8) / 10 ** 8
}

function parseTimestamp(timestamp: number, format: 'yyyy.mm.dd' | 'yyy-mm-dd hh:mm:ss' | 'normal') {
	if (format === 'yyyy.mm.dd') {
		return new Date(timestamp).toISOString().split('T')[0].replace(/-/g, '.')
	}
	if (format === 'yyy-mm-dd hh:mm:ss') {
		return `${new Date(timestamp).toISOString().replace('T', ' ').split('.')[0]} UTC`
	}
	if (format === 'normal') {
		return `${new Date(timestamp)}`.split(' ').slice(0,5).join(' ')
	}
	return new Date(timestamp)
}

const utils = {
	normaliceCoinName,
	filterCoin,
	parseParams,
	splitFloat,
	satsToBTC,
	removeUnnecessaryCryptoDecimals,
	parseTimestamp,
	addCommasIntegers,
}

export default {
	endpoints,
	routes,
	colors,
	coin,
	utils,
	ep,
}
