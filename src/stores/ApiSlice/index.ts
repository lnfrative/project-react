// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin } from 'interfaces'
// endregion

interface StateResendEmailConfirmation {
  status: 'loading' | 'loaded',
  data: any
}

interface State {
  coins: BackendCoin[] | undefined
  captchaKey: string

  resendEmailConfirmation: StateResendEmailConfirmation,
}

const initialState: State = {
  coins: undefined,
  captchaKey: '',

  resendEmailConfirmation: {
    status: 'loaded',
    data: undefined,
  }
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

    setApiResendEmailConfirmation: (state, action: PayloadAction<StateResendEmailConfirmation>) => ({
      ...state,
      resendEmailConfirmation: {
        ...state.resendEmailConfirmation,
        ...action.payload,
      }
    }),
  },
  initialState,
})

export const {
  setApiCoins,
  setApiCaptchaKey,
  setApiResendEmailConfirmation,
} = apiSlice.actions

export default apiSlice.reducer