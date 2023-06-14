import { createAction, createReducer } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  description: string
  price: number
  quantity: number
  image: string
}
export const addItemToCart = createAction<CartItem>('cart/addItemToCart')
export const removeItemFromCart = createAction<number>(
  'cart/removeItemFromCart'
)
export const decreaseItemQuantity = createAction<number>(
  'cart/decreaseItemQuantity'
)
export const increaseItemQuantity = createAction<number>(
  'cart/increaseItemQuantity'
)

const initialState: CartItem[] = []

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItemToCart, (state, action) => {
      const newItem = action.payload
      const existingItem = state.find((item) => item.id === newItem.id)

      if (existingItem) {
        existingItem.quantity += newItem.quantity
      } else {
        state.push(newItem)
      }
    })
    .addCase(removeItemFromCart, (state, action) => {
      const itemId = action.payload
      return state.filter((item) => item.id !== itemId)
    })
    .addCase(decreaseItemQuantity, (state, action) => {
      const itemId = action.payload
      const existingItem = state.find((item) => item.id === itemId)

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--
      }
    })
    .addCase(increaseItemQuantity, (state, action) => {
      const itemId = action.payload
      const existingItem = state.find((item) => item.id === itemId)

      if (existingItem) {
        existingItem.quantity++
      }
    })
})
