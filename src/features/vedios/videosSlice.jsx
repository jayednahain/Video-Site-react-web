import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "../../service/apiRequestFunctions";
import initialState from "./vediosInitialStates";
import { fetchVideosThunk } from "./vediosThunkFunctions";

const videoSlice = createSlice(
    {
        name: "videos",
        initialState: initialState,
        extraReducers: (builder) => {
            builder
                .addCase(fetchVideosThunk.pending, (state) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.error = "";
                })
                .addCase(fetchVideosThunk.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.error = "";
                    state.videos = action.payload;
                })
                .addCase(fetchVideosThunk.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.error = action.error.message;
                })
        }
    }

)

let videosReducer = videoSlice.reducer;

export default videosReducer;
