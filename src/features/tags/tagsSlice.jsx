import { createSlice } from "@reduxjs/toolkit";

import { fetchTagsThunk } from "./tagsThunkFunctions";
import initialStateTags from "./tagsInitialStates";

const tagsSlice = createSlice({
    name: "tags",
    initialState: initialStateTags,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchTagsThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })

            .addCase(fetchTagsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.tags = action.payload;
            })

            .addCase(fetchTagsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })
    }
})

let tagsReducer = tagsSlice.reducer;

export default tagsReducer;
