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
} = sessionSlice.actions

export default sessionSlice.reducer