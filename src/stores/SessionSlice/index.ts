// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendUser } from 'interfaces'
// endregion

interface State {
  user: BackendUser | undefined
}

const initialState: State = {
  user: undefined
}

const sessionSlice = createSlice({
  name: 'Session',
  reducers: {
    setSessionUser: (state, action: PayloadAction<BackendUser>) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState,
})

export const { setSessionUser } = sessionSlice.actions

export default sessionSlice.reducer