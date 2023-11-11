import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './categoriesSlice'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    carts: cartSlice,
  },
})