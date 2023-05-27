import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducer'
import authReducer from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
