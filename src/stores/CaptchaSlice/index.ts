// region import
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  token: string,
}

const initialState: State = {
  token: ''
}

const captchaSlice = createSlice({
  name: 'captcha',
  reducers: {
    setCaptchaToken: (state, action: PayloadAction<string>) => ({
      ...state,
      token: action.payload,
    }),
  },
  initialState,
})

export const {
  setCaptchaToken,
} = captchaSlice.actions

export default captchaSlice.reducer