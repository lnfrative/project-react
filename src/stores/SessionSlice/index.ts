// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import {
  BackendUser,
  BackendBalance,
  BackendSummary,
  BackendWallet,
  BackendTransaction,
  BackendRevenueSummary,
	BackendRevenueChart,
	BackendIncomeOrigin,
	BackendCollateralAssetsAndROI,
	BackendReturningAsset,
  BackendAddress,

  AsyncResource,
} from 'interfaces'
// endregion

interface SecondFactor {
  id: number,
  code: string | undefined,
}

interface State {
  balanceId: number
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: AsyncResource<BackendUser | undefined>
  balance: AsyncResource<BackendBalance | undefined>
  summary: BackendSummary | undefined
  wallets: AsyncResource<BackendWallet[]>
  transactions: Record<'last' | 'history', AsyncResource<BackendTransaction[] | undefined>>
  second_factor: SecondFactor,
  currency: string

  revenueSummary: BackendRevenueSummary | undefined
	revenueChart: BackendRevenueChart | undefined
	incomeOrigin: AsyncResource<BackendIncomeOrigin | undefined>
	assetsAndRoi: BackendCollateralAssetsAndROI | undefined
	returningAssets: BackendReturningAsset[] | undefined

  addresses: Record<string, AsyncResource<string[]> | null>
  newAddress: Record<string, AsyncResource<BackendAddress | null> | null>

  transactionPosted: Record<string, AsyncResource<null> | undefined>
  excludeRewardTransactions: boolean,
}

const initialState: State = {
  balanceId: 0,
  user: {
    status: 'nonload',
    data: undefined,
  },
  status: 'loading',
  balance: {
    status: 'nonload',
    data: undefined
  },
  summary: undefined,
  wallets: {
    status: 'nonload',
    data: [],
  },
  transactions: {
    last: { status: 'nonload', data: undefined },
    history: { status: 'nonload', data: undefined },
  },
  currency: 'usd',
  second_factor: {
    id: 0,
    code: undefined,
  },

  revenueSummary: undefined,
  revenueChart: undefined,
  incomeOrigin: {
    data: undefined,
    status: 'nonload'
  },
  assetsAndRoi: undefined,
  returningAssets: undefined,

  addresses: {},
  newAddress: {},

  transactionPosted: {},
  excludeRewardTransactions: true,
}

const sessionSlice = createSlice({
  name: 'Session',
  reducers: {
    setSessionUser: (state, action: PayloadAction<AsyncResource<BackendUser | undefined>>) => ({
      ...state,
      user: action.payload,
    }),
    setSessionStatus: (state, action: PayloadAction<'loading' | 'authenticated' | 'unauthenticated'>) => ({
      ...state,
      status: action.payload,
    }),
    setSessionBalance: (state, action: PayloadAction<AsyncResource<BackendBalance | undefined>>) => ({
      ...state,
      balance: action.payload,
    }),
    setSessionBalanceId: (state, action: PayloadAction<number>) => ({
      ...state,
      balanceId: action.payload,
    }),
    setSessionSummary: (state, action: PayloadAction<BackendSummary>) => ({
      ...state,
      summary: action.payload,
    }),
    setSessionWallets: (state, action: PayloadAction<AsyncResource<BackendWallet[]>>) => ({
      ...state,
      wallets: action.payload,
    }),
    setSessionTransactions: (state, action: PayloadAction<Record<'last', AsyncResource<BackendTransaction[] | undefined>> | Record<'history', AsyncResource<BackendTransaction[] | undefined>>>) => ({
      ...state,
      transactions: {
        ...state.transactions,
        ...action.payload,
      },
    }),
    setSessionCurrency: (state, action: PayloadAction<string>) => ({
      ...state,
      currency: action.payload,
    }),
    setSessionSecondFactor: (state, action: PayloadAction<SecondFactor>) => ({
      ...state,
      second_factor: action.payload,
    }),

    setSessionRevenueSummary: (state, action: PayloadAction<BackendRevenueSummary>) => ({
      ...state,
      revenueSummary: action.payload,
    }),
    setSessionRevenueChart: (state, action: PayloadAction<BackendRevenueChart | undefined>) => ({
      ...state,
      revenueChart: action.payload,
    }),
    setSessionIncomeOrigin: (state, action: PayloadAction<AsyncResource<BackendIncomeOrigin | undefined>>) => ({
      ...state,
      incomeOrigin: action.payload,
    }),
    setSessionAssetsAndRoi: (state, action: PayloadAction<BackendCollateralAssetsAndROI | undefined>) => ({
      ...state,
      assetsAndRoi: action.payload,
    }),
    setSessionReturningAssets: (state, action: PayloadAction<BackendReturningAsset[] | undefined>) => ({
      ...state,
      returningAssets: action.payload,
    }),

    setSessionAddresses: (state, action: PayloadAction<Record<string, AsyncResource<string[]>>>) => ({
      ...state,
      addresses: {
        ...state.addresses,
        ...action.payload,
      }
    }),
    setSessionNewAddress: (state, action: PayloadAction<Record<string, AsyncResource<BackendAddress | null>>>) => ({
      ...state,
      newAddress: {
        ...state.newAddress,
        ...action.payload,
      }
    }),
    setSessionTransactionPosted: (state, action: PayloadAction<Record<string, AsyncResource<null>>>) => ({
      ...state,
      transactionPosted: {
        ...state.transactionPosted,
        ...action.payload,
      }
    }),
    setSessionExcludeRewardTransactions: (state, action: PayloadAction<boolean>) => ({
      ...state,
      excludeRewardTransactions: action.payload,
    }),
  },
  initialState,
})

export const {
  setSessionUser,
  setSessionStatus,
  setSessionBalance,
  setSessionBalanceId,
  setSessionSummary,
  setSessionWallets,
  setSessionTransactions,
  setSessionSecondFactor,
  
  setSessionAssetsAndRoi,
  setSessionCurrency,
  setSessionIncomeOrigin,
  setSessionReturningAssets,
  setSessionRevenueChart,
  setSessionRevenueSummary,

  setSessionAddresses,
  setSessionNewAddress,

  setSessionTransactionPosted,
  setSessionExcludeRewardTransactions,
} = sessionSlice.actions

export default sessionSlice.reducer