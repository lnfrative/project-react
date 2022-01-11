import { BackendWallet } from 'utilities/Interfaces'

interface BackendWalletInfo extends BackendWallet {
  latest_address?: string,
}

export default BackendWalletInfo
