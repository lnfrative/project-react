// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendUser, BackendBalance } from 'interfaces'
// endregion

interface State {
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: BackendUser | undefined
  balance: BackendBalance | undefined
}

const initialState: State = {
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
  },
  initialState,
})

export const {
  setSessionUser,
  setSessionStatus,
  setSessionBalance,
} = sessionSlice.actions

export default sessionSlice.reducer