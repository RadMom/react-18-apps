import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter"; //we wxport counterReducer from counter.js
import authReducer from "./auth"; //we wxport authReducer from auth.js
//We only need reducers that's why we export counterSlice.reducer in counter.js
//We also need reducers that's why we export authSlice.reducer in auth.js

const store = configureStore({
    reducer: {
        counter: counterReducer, //If we export counterSlice from counter.js this will be counterSlice.reducer
        auth: authReducer, //If we export authReducer from auth.js this will be authReducer.reducer
    },
});

export default store;
