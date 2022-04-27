// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin, AsyncResource } from 'interfaces'
// endregion

interface State {
  coins: AsyncResource<BackendCoin[]>
  captchaKey: string

  resendEmailConfirmation: AsyncResource<any>
  captchaValidate: AsyncResource<string>
  loginAttempt: AsyncResource<undefined>,
}

const initialState: State = {
  captchaKey: '',
  coins: {
    status: 'nonload',
    data: []
  },
  
  resendEmailConfirmation: {
    status: 'nonload',
    data: undefined,
  },

  captchaValidate: {
    status: 'nonload',
    data: '',
  },

  loginAttempt: {
    status: 'nonload',
    data: undefined,
  }
}

const apiSlice = createSlice({
  name: 'api',
  reducers: {
    setApiCoins: (state, action: PayloadAction<AsyncResource<BackendCoin[]>>) => ({
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

    setApiCaptchaValidate: (state, action: PayloadAction<AsyncResource<string>>) => ({
      ...state,
      captchaValidate: action.payload,
    }),

    setApiLoginAttempt: (state, action: PayloadAction<AsyncResource<undefined>>) => ({
      ...state,
      loginAttempt: action.payload,
    }),
  },
  initialState,
})

export const {
  setApiCoins,
  setApiCaptchaKey,
  setApiResendEmailConfirmation,
  setApiCaptchaValidate,
  setApiLoginAttempt,
} = apiSlice.actions

export default apiSlice.reducer