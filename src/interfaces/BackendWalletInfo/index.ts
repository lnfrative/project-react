import { BackendWallet } from 'interfaces'

interface BackendWalletInfo extends BackendWallet {
	latest_address?: string
}

export default BackendWalletInfo
