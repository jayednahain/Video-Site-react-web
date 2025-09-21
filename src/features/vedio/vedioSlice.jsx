import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideoById } from "../../service/apiRequestFunctions";
import initialStateVideo from "./vedioInitialState";

export const fetchVideoThunk = createAsyncThunk('video/fetchVideo', async (id) => {
    const video = await getVideoById(id);
    return video;
});


const videoSlice = createSlice({
    name: 'video',
    initialState: initialStateVideo,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchVideoThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.video = action.payload;
            })
            .addCase(fetchVideoThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })

    }
})

let videoReducer = videoSlice.reducer;

export { videoReducer };
