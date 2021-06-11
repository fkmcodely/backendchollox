import { createSlice } from "@reduxjs/toolkit";

export const uploadSlice = createSlice({
    name: 'upload',
    initialState: {
        typeProductUpload: 0,
    },
    reducers: {
        setTypeProductUpload: (state,action) => {
            state.categorySelected = action.payload
        },
    },
})

export const { setTypeProductUpload } = uploadSlice.actions;
export default uploadSlice.reducer;