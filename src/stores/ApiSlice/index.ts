// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin } from 'interfaces'
// endregion

interface State {
  coins: BackendCoin[] | undefined
  captchaKey: string
}

const initialState: State = {
  coins: undefined,
  captchaKey: '',
}

const apiSlice = createSlice({
  name: 'api',
  reducers: {
    setApiCoins: (state, action: PayloadAction<BackendCoin[]>) => ({
      ...state,
      coins: action.payload,
    }),
    setApiCaptchaKey: (state, action: PayloadAction<string>) => ({
      ...state,
      captchaKey: action.payload,
    }),
  },
  initialState,
})

export const {
  setApiCoins,
  setApiCaptchaKey,
} = apiSlice.actions

export default apiSlice.reducer