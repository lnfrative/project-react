// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin } from 'interfaces'
// endregion

interface State {
  coins: BackendCoin[] | undefined
}

const initialState: State = {
  coins: undefined
}

const apiSlice = createSlice({
  name: 'api',
  reducers: {
    setApiCoins: (state, action: PayloadAction<BackendCoin[]>) => ({
      ...state,
      coins: action.payload,
    }),
  },
  initialState,
})

export const {
  setApiCoins,
} = apiSlice.actions

export default apiSlice.reducer