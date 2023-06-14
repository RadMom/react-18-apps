import { createSlice } from "@reduxjs/toolkit";

//authentication
const initialAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;  //we import it as authReducer in index.js
