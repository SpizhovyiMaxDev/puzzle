
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload);
        },

        deleteItem(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },

        increaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
                item.totalPrice = item.quantity * item.price;
            }
        },

        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                item.totalPrice = item.quantity * item.price;
                if (item.quantity === 0) {
                    state.cart = state.cart.filter(cartItem => cartItem.id !== item.id);
                }
            }
        },
    }
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartPrice = (state) => state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);

export const getCurrentQuantity = (id) => (store) => store.cart.cart.find(item=> item.id === id)?.quantity ?? 0;

export const getCart = (store) => store.cart.cart;
