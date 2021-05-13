import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        categorySelected: 0,
    },
    reducers: {
        updateCategory: (state,action) => {
            state.categorySelected = action.payload
        },
    },
})

export const { updateCategory } = uiSlice.actions;
export default uiSlice.reducer;