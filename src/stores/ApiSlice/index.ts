// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interfaces
import { BackendCoin } from 'interfaces'
// endregion

type Status = 'loading' | 'loaded'

interface ApiResource<Data> {
  status: Status,
  data: Data
  error?: boolean
}

interface State {
  coins: BackendCoin[] | undefined
  captchaKey: string

  resendEmailConfirmation: ApiResource<any>
  captchaValidate: ApiResource<string | undefined>
}

const initialState: State = {
  coins: undefined,
  captchaKey: '',

  resendEmailConfirmation: {
    status: 'loaded',
    data: undefined,
  },

  captchaValidate: {
    status: 'loaded',
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

    setApiResendEmailConfirmation: (state, action: PayloadAction<ApiResource<any>>) => ({
      ...state,
      resendEmailConfirmation: action.payload,
    }),

    setApiCaptchaValidate: (state, action: PayloadAction<ApiResource<string | undefined>>) => ({
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