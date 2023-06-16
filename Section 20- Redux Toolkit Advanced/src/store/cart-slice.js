import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        //Need this reducer for fetchingData in App.jsx
        replaceCartData(state, action) {
            //If we have items when fetching data it will save it as undefined that's why we need ||[]
            state.items = action.payload.items || [];
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);

            //We can add only 1 item!!!
            state.totalQuantity++;
            state.changed = true; //Must change this to true - if (cart.changed) then sendCartData in App.jsx
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true; //Must change this to true - if (cart.changed) then sendCartData in App.jsx
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id); //return an array with items with !==ids
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartAcrions = cartSlice.actions;

export default cartSlice;
