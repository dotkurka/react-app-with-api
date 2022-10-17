import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        getUser() {},
        postUser() {},
        addUser(state, action) {
            state.users = action.payload;
        },
    },
});

export const { addUser, postUser, getUser } = userSlice.actions;

export default userSlice.reducer;
