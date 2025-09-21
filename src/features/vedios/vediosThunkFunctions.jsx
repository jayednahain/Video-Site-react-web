import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "../../service/apiRequestFunctions";

const fetchVideosThunk = createAsyncThunk('videos/fetchVideos', async ({ search, tags }) => {
    const videos = await getVideos(search, tags);
    return videos;
});

export { fetchVideosThunk };