// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendUser } from 'interfaces'
// endregion

interface State {
  status: 'loading' | 'authenticated' | 'unauthenticated'
  user: BackendUser | undefined
}

const initialState: State = {
  user: undefined,
  status: 'loading'
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
  },
  initialState,
})

export const { setSessionUser, setSessionStatus } = sessionSlice.actions

export default sessionSlice.reducer