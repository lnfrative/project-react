// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin, AsyncResource } from 'interfaces'
// endregion

interface State {
  coins: BackendCoin[] | undefined
  captchaKey: string

  resendEmailConfirmation: AsyncResource<any>
  captchaValidate: AsyncResource<string | undefined>
}

const initialState: State = {
  coins: undefined,
  captchaKey: '',

  resendEmailConfirmation: {
    status: 'nonload',
    data: undefined,
  },

  captchaValidate: {
    status: 'nonload',
    data: undefined
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

    setApiResendEmailConfirmation: (state, action: PayloadAction<AsyncResource<any>>) => ({
      ...state,
      resendEmailConfirmation: action.payload,
    }),

    setApiCaptchaValidate: (state, action: PayloadAction<AsyncResource<string | undefined>>) => ({
      ...state,
      captchaValidate: action.payload,
    }),
  },
  initialState,
})

export const {
  setApiCoins,
  setApiCaptchaKey,
  setApiResendEmailConfirmation,
  setApiCaptchaValidate,
} = apiSlice.actions

export default apiSlice.reducer