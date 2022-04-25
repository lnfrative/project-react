// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import {
  BackendUser,
  BackendBalance,
  BackendSummary,
  BackendWallet,
  BackendTransaction,
} from 'interfaces'
// endregion

interface State {
  balanceId: number
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: BackendUser | undefined
  balance: BackendBalance | undefined
  summary: BackendSummary | undefined
  wallets: BackendWallet[] | undefined
  transactions: BackendTransaction[] | undefined
}

const initialState: State = {
  balanceId: 0,
  user: undefined,
  status: 'loading',
  balance: undefined,
  summary: undefined,
  wallets: undefined,
  transactions: undefined,
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
    setSessionWallets: (state, action: PayloadAction<BackendWallet[]>) => ({
      ...state,
      wallets: action.payload,
    }),
    setSessionTransactions: (state, action: PayloadAction<BackendTransaction[]>) => ({
      ...state,
      transactions: action.payload,
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
} = sessionSlice.actions

export default sessionSlice.reducer