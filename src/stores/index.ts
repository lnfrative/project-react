// region import
import { configureStore } from '@reduxjs/toolkit'

// reducers
import sessionReducer from './SessionSlice'
import apiReducer from './ApiSlice'
import captchaReducer from './CaptchaSlice'
// endregion

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    api: apiReducer,
    captcha: captchaReducer,
  },
  devTools: false,
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch