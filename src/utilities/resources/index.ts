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

function parseParams(params?: Record<string, string>) {
	const paramsCloned = { ...params }
	Object.keys(paramsCloned).forEach(key => {
		if (!paramsCloned[key]) {
			delete paramsCloned[key]
		}
	})
	return paramsCloned
}

function splitFloat(value: number, decimalLength?: number) {
	const floatSegments: Array<string | undefined> = value.toString().split('.')
	return {
		integer: floatSegments[0] ?? '0',
		decimal: (floatSegments[1] ?? '0').slice(0, decimalLength),
	}
}

function satsToBTC(sats: number) {
	return sats / 10 ** 8
}

const utils = {
	normaliceCoinName,
	filterCoin,
	parseParams,
	splitFloat,
	satsToBTC,
}

export default {
	endpoints,
	routes,
	colors,
	coin,
	utils,
}
