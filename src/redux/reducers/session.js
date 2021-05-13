import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
    name: 'ui',
    initialState: {
        session: false,
    },
    reducers: {
        updateSession : (state,action) => {
            state.session = action.payload
        },
    },
})

export const { updateSession } = sessionSlice.actions;
export default sessionSlice.reducer;