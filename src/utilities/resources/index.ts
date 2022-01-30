import { BackendCoin } from 'interfaces'
import routes from './routes'

interface ResourceCoin {
	logo: string
}

const coin: Record<string, ResourceCoin> = {
	dogecash: {
		logo: 'https://dev-api.account.dogecash.org/assets/coins/DogeCash/logo.svg',
	},
	bitcoin: {
		logo: 'https://dev-api.account.dogecash.org/assets/coins/Bitcoin/logo.svg',
	},
	stakecube: {
		logo: 'https://dev-api.account.dogecash.org/assets/coins/Stakecube/logo.png',
	},
	litecoin: {
		logo: 'https://dev-api.account.dogecash.org/assets/coins/Litecoin/logo.svg',
	},
}

const endpoints = {
	get: {
		userCsrf: '/api/user/csrf',
		user: '/api/user',
		wallets: '/api/user/wallets',
		coins: '/api/coins',
		newaddress: '/api/user/wallets/{coinId}/newaddress',
		emailVerify: '/api/email/verify/{user_id}/{hash}/',
		captchaKey: '/api/captcha/key',
		twoFactorQR: '/api/user/second-factor/qr',
	},
	post: {
		userCreateAccessToken: '/api/user/create/access-token',
		user: '/api/user',
		recoverPassword: '/api/user/recover-password',
		resetPassword: '/api/user/update-password',
		changePassword: '/api/user/change-password',
		captchaValidate: '/api/captcha/validate',
		secondFactorEnable: '/api/user/second-factor/enable',
		signout: '/api/user/logout',
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

const utils = {
	normaliceCoinName,
	filterCoin,
}

export default {
	endpoints,
	routes,
	colors,
	coin,
	utils,
}
