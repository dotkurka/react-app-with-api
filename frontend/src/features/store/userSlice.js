import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {
        fetchUser() {},
        addUser(state, action) {
            state.users = action.payload;
        },
        removeUser(state, action) {
            state.users.filter((post) => post.id !== action.payload);
        },
    },
});

export const { addUser, removeUser, fetchUser } = userSlice.actions;

export default userSlice.reducer;
