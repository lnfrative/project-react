import { BackendCoin } from 'interfaces'
import routes from './routes'

interface ResourceCoin {
	logo: string
}

const coin: Record<string, ResourceCoin> = {
	dogecash: {
		logo: `https://dev-api-account.dogecash.org/assets/coins/DogeCash/logo.svg`,
	},
	bitcoin: {
		logo: `https://dev-api-account.dogecash.org/assets/coins/Bitcoin/logo.svg`,
	},
	stakecube: {
		logo: `https://dev-api-account.dogecash.org/assets/coins/Stakecube/logo.png`,
	},
	litecoin: {
		logo: `https://dev-api-account.dogecash.org/assets/coins/Litecoin/logo.svg`,
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
		revenueChart: '/api/user/income/revenuePerMonthChart',
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
	const { length } = integer
	if (length < 4) {
		return integer
	}
	if (length < 7) {
		return `${integer.slice(0, length - 3)},${integer.slice(length - 3)}`
	}
	return `${integer.slice(0, length - 6)}\`${integer.slice(length - 6, length - 3)},${integer.slice(
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
		value: `${integer}.${decimal}`,
	}
}

function satsToBTC(sats: number) {
	return sats / 10 ** 8
}

function removeUnnecessaryCryptoDecimals(crypto: number) {
	return Math.floor(crypto * 10 ** 8) / 10 ** 8
}

function parseTimestamp(timestamp: number, format: 'yyyy.mm.dd') {
	if (format === 'yyyy.mm.dd') {
		return new Date(timestamp).toISOString().split('T')[0].replace(/-/g, '.')
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
}
