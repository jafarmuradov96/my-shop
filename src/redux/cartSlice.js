import { createSlice } from "@reduxjs/toolkit";


const fetchLocalStorage = () => {
    let cart = localStorage.getItem("cart")

    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
    cart: fetchLocalStorage(),
    itemCount: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducer: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)

            if(isItemCart) {
                const tempCart = state.carts.map(item => {
                  if(item.id === action.payload.id) {
                    let tempQuantity =  item.quantity + action.payload.quantity
                    let tempTotalPrice = tempQuantity + item.price;

                    return {
                        ...item, quantity: tempQuantity, totalPrice: tempTotalPrice
                    }
                  }   else {
                    return item
                  }
                })

                state.carts = tempCart;
                storeInLocalStorage(state.carts)
            } else {
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts)
            }
        },

        remoweFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload)

            state.carts = tempCart;
            storeInLocalStorage(state.carts)
        },
        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts)
        },
        getCartTotal: (state) => {
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice
            }, 0)

            state.itemCount = state.carts.length
        }
    }
})
export const {addToCart, remoweFromCart, clearCart, getCartTotal} = cartSlice.actions
export default cartSlice.reducer