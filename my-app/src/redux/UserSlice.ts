import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    currentUser: Record<string, any>; 
    isLoggedIn: boolean;
}

const initialState: UserState = {
    currentUser: {},
    isLoggedIn: false
};

const slice = createSlice({
    name: "UserSlice",
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<Record<string, any>>) => {
            state.currentUser = action.payload;
            state.isLoggedIn = true;
        },
        signOut: (state ,  action: PayloadAction<Record<string, any>>) => {
            state.currentUser = {};
            state.isLoggedIn = false;
        }
    }
});

export const { setCurrentUser, signOut } = slice.actions;
export default slice.reducer;
