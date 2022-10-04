import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            {
                id: 1,
                name: "Ostap",
                email: "Gmail.com",
                age: "17 year",
            },
        ],
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload);
        },
        removeUser(state, action) {
            state.users.filter((post) => post.id !== action.payload);
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
