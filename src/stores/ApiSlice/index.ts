// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin, AsyncResource } from 'interfaces'
// endregion

interface BackendError {
  code: number
  message: string
  data: any
}

interface State {
  coins: AsyncResource<BackendCoin[]>
  captchaKey: string

  resendEmailConfirmation: AsyncResource<any>
  captchaValidate: AsyncResource<string>
  loginAttempt: AsyncResource<undefined>,

  error: BackendError
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
  },

  error: {
    code: 0,
    message: 'An undiagnosed error has occurred, please report it.',
    data: undefined
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

    setApiError: (state, action: PayloadAction<BackendError>) => ({
      ...state,
      error: action.payload,
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
  setApiError,
} = apiSlice.actions

export default apiSlice.reducer