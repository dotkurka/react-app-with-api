import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "todos",
    initialState: [
        {
            id: 1,
            name: "Ostap",
            email: "Gmail.com",
            age: "17 year",
        },
    ],
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        removePost(state, action) {
            state.filter((post) => post.id !== action.payload);
        },
    },
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
