// region import
import { configureStore } from '@reduxjs/toolkit'

// reducers
import sessionReducer from './SessionSlice'
import apiReducer from './ApiSlice'
// endregion

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    api: apiReducer,
  },
  devTools: false,
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreDispatch = typeof store.dispatch