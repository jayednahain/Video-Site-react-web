import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "../../service/apiRequestFunctions";
import initialStateRelatedVideo from "./relatedVedioInitialState";


export const fetchRelatedVideosThunk = createAsyncThunk('video/fetchRelatedVideos', async ({ id, tags }) => {
    try {
        const videos = await getRelatedVideos({ id, tags });
        return videos;
    } catch (error) {
        return error.message;
    }
});

// const setPending = (state) => {
//     state.isLoading = true;
//     state.isError = false;
//     state.error = "";
// };

// const setFulfilled = (state, action, dataKey = 'data') => {
//     state.isLoading = false;
//     state.isError = false;
//     state.error = "";
//     state[dataKey] = action.payload;
// };

// const setRejected = (state, action) => {
//     state.isLoading = false;
//     state.isError = true;
//     state.error = action.payload || action.error.message;
// };


// const relatedVideoSlice = createSlice({
//     name: "relatedVideo",
//     initialState: initialStateRelatedVideo,
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchRelatedVideosThunk.pending, setPending)
//             .addCase(fetchRelatedVideosThunk.fulfilled, (state, action) =>
//                 setFulfilled(state, action, 'relatedVideos')
//             )
//             .addCase(fetchRelatedVideosThunk.rejected, setRejected);
//     }
// });

const relatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState: initialStateRelatedVideo,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedVideosThunk.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(fetchRelatedVideosThunk.fulfilled, (state, action) => {
                console.log("action.payload : ", action)
                state.isLoading = false;
                state.isError = false;
                state.error = "";
                state.videos = action.payload;
            })
            .addCase(fetchRelatedVideosThunk.rejected, (state, action) => {
                console.log("action.payload : ", action)

                state.isLoading = false;
                state.isError = true;
                state.error = action.payload || action.error.message;
            });
    }
});


let relatedVideoReducer = relatedVideoSlice.reducer;
export { relatedVideoReducer };
