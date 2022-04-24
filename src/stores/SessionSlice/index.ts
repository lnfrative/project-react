// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendUser, BackendBalance } from 'interfaces'
// endregion

interface State {
  balanceId: number
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: BackendUser | undefined
  balance: BackendBalance | undefined
}

const initialState: State = {
  balanceId: 0,
  user: undefined,
  status: 'loading',
  balance: undefined,
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
  },
  initialState,
})

export const {
  setSessionUser,
  setSessionStatus,
  setSessionBalance,
  setSessionBalanceId,
} = sessionSlice.actions

export default sessionSlice.reducer