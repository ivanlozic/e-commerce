import { createAction, createReducer } from '@reduxjs/toolkit'

interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
  }
export const addItemToCart = createAction<CartItem>('cart/addItemToCart');

const initialState: CartItem[] = [];

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addItemToCart, (state, action) => {
    const newItem = action.payload;
    state.push(newItem);
  });
});


