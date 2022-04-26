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

interface State {
  balanceId: number
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: BackendUser | undefined
  balance: BackendBalance | undefined
  summary: BackendSummary | undefined
  wallets: AsyncResource<BackendWallet[]>
  transactions: BackendTransaction[] | undefined
  currency: string

  revenueSummary: BackendRevenueSummary | undefined
	revenueChart: BackendRevenueChart | undefined
	incomeOrigin: BackendIncomeOrigin | undefined
	assetsAndRoi: BackendCollateralAssetsAndROI | undefined
	returningAssets: BackendReturningAsset[] | undefined

  addresses: Record<string, AsyncResource<string[]> | null>
  newAddress: Record<string, AsyncResource<BackendAddress | null> | null>
}

const initialState: State = {
  balanceId: 0,
  user: undefined,
  status: 'loading',
  balance: undefined,
  summary: undefined,
  wallets: {
    status: 'nonload',
    data: [],
  },
  transactions: undefined,
  currency: 'usd',

  revenueSummary: undefined,
  revenueChart: undefined,
  incomeOrigin: undefined,
  assetsAndRoi: undefined,
  returningAssets: undefined,

  addresses: {},
  newAddress: {},
}

const sessionSlice = createSlice({
  name: 'Session',
  reducers: {
    setSessionUser: (state, action: PayloadAction<BackendUser>) => ({
      ...state,
      user: action.payload,
    }),
    setSessionStatus: (state, action: PayloadAction<'loading' | 'authenticated' | 'unauthenticated'>) => ({
      ...state,
      status: action.payload,
    }),
    setSessionBalance: (state, action: PayloadAction<BackendBalance>) => ({
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
    setSessionTransactions: (state, action: PayloadAction<BackendTransaction[]>) => ({
      ...state,
      transactions: action.payload,
    }),
    setSessionCurrency: (state, action: PayloadAction<string>) => ({
      ...state,
      currency: action.payload,
    }),

    setSessionRevenueSummary: (state, action: PayloadAction<BackendRevenueSummary>) => ({
      ...state,
      revenueSummary: action.payload,
    }),
    setSessionRevenueChart: (state, action: PayloadAction<BackendRevenueChart | undefined>) => ({
      ...state,
      revenueChart: action.payload,
    }),
    setSessionIncomeOrigin: (state, action: PayloadAction<BackendIncomeOrigin | undefined>) => ({
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
  
  setSessionAssetsAndRoi,
  setSessionCurrency,
  setSessionIncomeOrigin,
  setSessionReturningAssets,
  setSessionRevenueChart,
  setSessionRevenueSummary,

  setSessionAddresses,
  setSessionNewAddress,
} = sessionSlice.actions

export default sessionSlice.reducer